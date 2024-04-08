const beforePerson = `public class Person {
  private int health;
  private int intelligence;
  private Strength strength;

  public Person(int health, int intelligence, Strength strength) {
    this.health = health;
    this.intelligence = intelligence;
    this.strength = strength;
  }

  public void attack() {
    // method untuk menyerang
  }

  public void defend() {
    // method untuk bertahan
  }

  public void heal() {
    // method untuk meregenerasi darah
  }

  public void pray() {
    // method untuk berdoa
  }
}`

const afterPerson = `public class Person {
  private int health;
  private int intelligence;
  private Strength strength;

  public Person(int health, int intelligence, Strength strength) {
    this.health = health;
    this.intelligence = intelligence;
    this.strength = strength;
  }

  public void attack() {
    // method untuk menyerang
  }

  public void defend() {
    // method untuk bertahan
  }

  public void heal() {
    // method untuk meregenerasi darah
  }
}`

const speculativeGeneralityBefore = [
  {
    id: 1,
    class: 'Person',
    code: beforePerson
  }
]

const speculativeGeneralityAfter = [
  {
    id: 1,
    class: 'Person',
    code: afterPerson
  }
]

export { speculativeGeneralityBefore, speculativeGeneralityAfter }