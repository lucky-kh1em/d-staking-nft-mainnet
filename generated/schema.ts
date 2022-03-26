// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class ExampleEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("count", Value.fromBigInt(BigInt.zero()));
    this.set("owner", Value.fromBytes(Bytes.empty()));
    this.set("tokenId", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ExampleEntity entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save ExampleEntity entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("ExampleEntity", id.toString(), this);
    }
  }

  static load(id: string): ExampleEntity | null {
    return changetype<ExampleEntity | null>(store.get("ExampleEntity", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get count(): BigInt {
    let value = this.get("count");
    return value!.toBigInt();
  }

  set count(value: BigInt) {
    this.set("count", Value.fromBigInt(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value!.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    return value!.toBigInt();
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }
}

export class Civilian extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("tokenId", Value.fromBigInt(BigInt.zero()));
    this.set("address", Value.fromString(""));
    this.set("isWorking", Value.fromBoolean(false));
    this.set("poolRating", Value.fromBigInt(BigInt.zero()));
    this.set("poolRarity", Value.fromBigInt(BigInt.zero()));
    this.set("owner", Value.fromString(""));
    this.set("heroRating", Value.fromBigInt(BigInt.zero()));
    this.set("heroRarity", Value.fromBigInt(BigInt.zero()));
    this.set("heroName", Value.fromBigInt(BigInt.zero()));
    this.set("attack", Value.fromBigInt(BigInt.zero()));
    this.set("defense", Value.fromBigInt(BigInt.zero()));
    this.set("lucky", Value.fromBigInt(BigInt.zero()));
    this.set("energy", Value.fromBigInt(BigInt.zero()));
    this.set("level", Value.fromBigInt(BigInt.zero()));
    this.set("lastFightTime", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Civilian entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Civilian entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Civilian", id.toString(), this);
    }
  }

  static load(id: string): Civilian | null {
    return changetype<Civilian | null>(store.get("Civilian", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    return value!.toBigInt();
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }

  get address(): string {
    let value = this.get("address");
    return value!.toString();
  }

  set address(value: string) {
    this.set("address", Value.fromString(value));
  }

  get isWorking(): boolean {
    let value = this.get("isWorking");
    return value!.toBoolean();
  }

  set isWorking(value: boolean) {
    this.set("isWorking", Value.fromBoolean(value));
  }

  get poolRating(): BigInt {
    let value = this.get("poolRating");
    return value!.toBigInt();
  }

  set poolRating(value: BigInt) {
    this.set("poolRating", Value.fromBigInt(value));
  }

  get poolRarity(): BigInt {
    let value = this.get("poolRarity");
    return value!.toBigInt();
  }

  set poolRarity(value: BigInt) {
    this.set("poolRarity", Value.fromBigInt(value));
  }

  get owner(): string {
    let value = this.get("owner");
    return value!.toString();
  }

  set owner(value: string) {
    this.set("owner", Value.fromString(value));
  }

  get heroRating(): BigInt {
    let value = this.get("heroRating");
    return value!.toBigInt();
  }

  set heroRating(value: BigInt) {
    this.set("heroRating", Value.fromBigInt(value));
  }

  get heroRarity(): BigInt {
    let value = this.get("heroRarity");
    return value!.toBigInt();
  }

  set heroRarity(value: BigInt) {
    this.set("heroRarity", Value.fromBigInt(value));
  }

  get heroName(): BigInt {
    let value = this.get("heroName");
    return value!.toBigInt();
  }

  set heroName(value: BigInt) {
    this.set("heroName", Value.fromBigInt(value));
  }

  get attack(): BigInt {
    let value = this.get("attack");
    return value!.toBigInt();
  }

  set attack(value: BigInt) {
    this.set("attack", Value.fromBigInt(value));
  }

  get defense(): BigInt {
    let value = this.get("defense");
    return value!.toBigInt();
  }

  set defense(value: BigInt) {
    this.set("defense", Value.fromBigInt(value));
  }

  get lucky(): BigInt {
    let value = this.get("lucky");
    return value!.toBigInt();
  }

  set lucky(value: BigInt) {
    this.set("lucky", Value.fromBigInt(value));
  }

  get energy(): BigInt {
    let value = this.get("energy");
    return value!.toBigInt();
  }

  set energy(value: BigInt) {
    this.set("energy", Value.fromBigInt(value));
  }

  get level(): BigInt {
    let value = this.get("level");
    return value!.toBigInt();
  }

  set level(value: BigInt) {
    this.set("level", Value.fromBigInt(value));
  }

  get lastFightTime(): BigInt {
    let value = this.get("lastFightTime");
    return value!.toBigInt();
  }

  set lastFightTime(value: BigInt) {
    this.set("lastFightTime", Value.fromBigInt(value));
  }
}

export class User extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save User entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save User entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("User", id.toString(), this);
    }
  }

  static load(id: string): User | null {
    return changetype<User | null>(store.get("User", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get civilians(): Array<string> | null {
    let value = this.get("civilians");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set civilians(value: Array<string> | null) {
    if (!value) {
      this.unset("civilians");
    } else {
      this.set("civilians", Value.fromStringArray(<Array<string>>value));
    }
  }
}
