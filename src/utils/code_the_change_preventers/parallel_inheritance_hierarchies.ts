const beforeKendaraan = `public class Kendaraan() {
  int kecepatan;

  void tambahKecepatan(int nilai) {
    kecepatan += nilai;
  }
  void kurangiKecepatan(int nilai) {
    kecepatan -= nilai;
  }
}`

const beforeMobil = `public class Mobil extends Kendaraan {
  // sebuah class mobil yang di extends dari kendaraan yang memiliki atribut dan method
}`

const beforeMotor = `public class Motor extends Kendaraan {
  // sebuah class motor yang di extends dari kendaraan yang memiliki atribut dan method
}`

const beforeMode = `class Mode {
  String mode;

  void setMode(String mode) {
    this.mode = mode;
  }
}`

const beforeModeMobil = `public class ModeMobil extends Mode {
  // sebuah class mode mobil yang di extends dari mode yang memiliki atribut dan method
}`

const beforeModeMotor = `public class ModeMotor extends Mode {
  // sebuah class mode motor yang di extends dari mode yang memiliki atribut dan method
}`

const afterKendaraan = `public class Kendaraan() {
  int kecepatan;
  Mode mode;

  Kendaraan(Mode mode) {
    this.mode = mode;
  }

  void tambahKecepatan(int nilai) {
    kecepatan += nilai;
  }
  void kurangiKecepatan(int nilai) {
    kecepatan -= nilai;
  }
}`

const afterMode = `class Mode {
  String mode;

  void setMode(String mode) {
    this.mode = mode;
  }
}`

const afterMobil = `public class Mobil extends Kendaraan {
  Mobil(Mode mode) {
    super(mode);
  }
}`

const afterMotor = `public class Motor extends Kendaraan {
  Mobil(Mode mode) {
    super(mode);
  }
}`

const parallelInheritanceHierarchiesBefore = [
  {
    id: 1,
    class: 'Kendaraan',
    code: beforeKendaraan
  },
  {
    id: 2,
    class: 'Mode',
    code: beforeMode
  },
  {
    id: 3,
    class: 'Mobil',
    code: beforeMobil
  },
  {
    id: 4,
    class: 'Motor',
    code: beforeMotor
  },
  {
    id: 5,
    class: 'ModeMobil',
    code: beforeModeMobil
  },
  {
    id: 6,
    class: 'ModeMotor',
    code: beforeModeMotor
  },
]

const parallelInheritanceHierarchiesAfter = [
  {
    id: 1,
    class: 'Kendaraan',
    code: afterKendaraan
  },
  {
    id: 2,
    class: 'Mode',
    code: afterMode
  },
  {
    id: 3,
    class: 'Mobil',
    code: afterMobil
  },
  {
    id: 4,
    class: 'Motor',
    code: afterMotor
  },
]

export { parallelInheritanceHierarchiesBefore, parallelInheritanceHierarchiesAfter }