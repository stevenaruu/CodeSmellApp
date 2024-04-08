const beforeStrength = `class Strength {
  private int value;

  public Strength(int value) {
    this.value = value;
  }
}`

const beforePerson = `public class Person {
  private int health;
  private int intelligence;
  private Strength strength;

  public Person(int health, int intelligence, Strength strength) {
    this.health = health;
    this.intelligence = intelligence;
    this.strength = strength;
  }
}`

const afterPerson = `public class Person {
  private int health;
  private int intelligence;
  private int strength;

  public Person(int health, int intelligence, int strength) {
    this.health = health;
    this.intelligence = intelligence;
    this.strength = strength;
  }
}`

const lazyClassBefore = [
  {
    id: 1,
    class: 'Strength',
    code: beforeStrength
  },
  {
    id: 2,
    class: 'Person',
    code: beforePerson
  }
]

const lazyClassAfter = [
  {
    id: 1,
    class: 'Person',
    code: afterPerson
  }
]

export { lazyClassBefore, lazyClassAfter }