import Text "mo:core/Text";
import Nat "mo:core/Nat";
import Int "mo:core/Int";
import Runtime "mo:core/Runtime";
import Order "mo:core/Order";
import Map "mo:core/Map";
import Time "mo:core/Time";

actor {
  type Message = {
    name : Text;
    email : Text;
    message : Text;
    timestamp : Time.Time;
  };

  module Message {
    public func compareDescending(m1 : Message, m2 : Message) : Order.Order {
      Int.compare(m2.timestamp, m1.timestamp);
    };
  };

  let messages = Map.empty<Nat, Message>();
  var nextId = 0;

  public shared ({ caller }) func submitContactForm(name : Text, email : Text, message : Text) : async () {
    let id = nextId;
    let newMessage : Message = {
      name;
      email;
      message;
      timestamp = Time.now();
    };
    messages.add(id, newMessage);
    nextId += 1;
  };

  public query ({ caller }) func getAllMessages() : async [Message] {
    messages.values().toArray().sort(Message.compareDescending);
  };

  public query ({ caller }) func getMessageById(id : Nat) : async Message {
    switch (messages.get(id)) {
      case (null) { Runtime.trap("Message with ID " # id.toText() # " not found.") };
      case (?message) { message };
    };
  };

  public shared ({ caller }) func deleteMessage(id : Nat) : async () {
    if (not messages.containsKey(id)) {
      Runtime.trap("Message with ID " # id.toText() # " does not exist.");
    };
    messages.remove(id);
  };

  public shared ({ caller }) func clearAllMessages() : async () {
    messages.clear();
  };

  public query ({ caller }) func getMessagesCount() : async Nat {
    messages.size();
  };
};
