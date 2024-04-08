const beforeCalculator = `public class Calculator {
  // Metode untuk penambahan dua angka
  public int add(int a, int b) {
    // Membuat sebuah variable sum, untuk menambahkan a dan b
    int sum = a + b;
    // mengembalikan nilai sum setelah sum berhasil di tambahkan
    return sum;
  }
}`

const afterCalculator = `public class Calculator {
  public int add(int a, int b) {
    int sum = a + b;
    return sum;
  }
}`

const commentBefore = [
  {
    id: 1,
    class: 'Calculator',
    code: beforeCalculator
  }
]

const commentAfter = [
  {
    id: 1,
    class: 'Calculator',
    code: afterCalculator
  }
]

export { commentBefore, commentAfter }