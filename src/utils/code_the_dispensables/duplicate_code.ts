const beforeFoo = `public void bar() {
  // clear screen
  for(int i = 0; i < 26; i++) {
    System.out.println("");
  }

  // print 3x
  for(int i = 0; i < 3; i++) {
    System.out.println("=");
  }
  System.out.println("=");
  System.out.println("Bar");

  // print 3x
  for(int i = 0; i < 3; i++) {
    System.out.println("=");
  }
}`

const beforeBaz = `public void bar() {
  // clear screen
  for(int i = 0; i < 26; i++) {
    System.out.println("");
  }

  // print 3x
  for(int i = 0; i < 3; i++) {
    System.out.println("=");
  }
  System.out.println("=");
  System.out.println("Baz");

  // print 3x
  for(int i = 0; i < 3; i++) {
    System.out.println("=");
  }
}`

const beforeQux = `public void bar() {
  // clear screen
  for(int i = 0; i < 26; i++) {
    System.out.println("");
  }

  // print 3x
  for(int i = 0; i < 3; i++) {
    System.out.println("=");
  }
  System.out.println("=");
  System.out.println("Qux");

  // print 3x
  for(int i = 0; i < 3; i++) {
    System.out.println("=");
  }
}`

const duplicateCodeBefore = [
  {
    id: 1,
    class: 'foo',
    code: beforeFoo
  },
  {
    id: 2,
    class: 'baz',
    code: beforeBaz
  },
  {
    id: 3,
    class: 'qux',
    code: beforeQux
  },
]

const duplicateCodeAfter = [
  {
    id: 1,
    class: 'foo',
    code: beforeFoo
  },
  {
    id: 2,
    class: 'baz',
    code: beforeBaz
  },
  {
    id: 3,
    class: 'qux',
    code: beforeQux
  },
]

export { duplicateCodeBefore, duplicateCodeAfter }