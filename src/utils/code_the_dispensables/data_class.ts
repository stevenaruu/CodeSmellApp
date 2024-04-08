const beforeCat = `public class Cat() {
  public String name;
  public int age;
  public String breed;
}`

const afterCat = `public class Cat {
  private String name;
  private int age;
  private String breed;

  // Setter methods
  public void setName(String name) {
    this.name = name;
  }

  public void setAge(int age) {
    this.age = age;
  }

  public void setBreed(String breed) {
    this.breed = breed;
  }

  // Getter methods
  public String getName() {
    return name;
  }

  public int getAge() {
    return age;
  }

  public String getBreed() {
    return breed;
  }
}`

const dataClassBefore = [
  {
    id: 1,
    class: 'Cat',
    code: beforeCat
  }
]

const dataClassAfter = [
  {
    id: 1,
    class: 'Cat',
    code: afterCat
  }
]

export { dataClassBefore, dataClassAfter }