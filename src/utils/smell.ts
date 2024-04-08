import { ISmell } from "../interfaces/smell.interfaces";
import { divergentChangeAfter, divergentChangeBefore } from "./code_the_change_preventers/divergent_change";
import { parallelInheritanceHierarchiesAfter, parallelInheritanceHierarchiesBefore } from "./code_the_change_preventers/parallel_inheritance_hierarchies";
import { shotgunSurgeryAfter, shotgunSurgeryBefore } from "./code_the_change_preventers/shotgun_surgery";
import { commentAfter, commentBefore } from "./code_the_dispensables/comment";
import { dataClassAfter, dataClassBefore } from "./code_the_dispensables/data_class";
import { deadCodeAfter, deadCodeBefore } from "./code_the_dispensables/dead_code";
import { duplicateCodeAfter, duplicateCodeBefore } from "./code_the_dispensables/duplicate_code";
import { lazyClassAfter, lazyClassBefore } from "./code_the_dispensables/lazy_class";
import { speculativeGeneralityAfter, speculativeGeneralityBefore } from "./code_the_dispensables/speculative_generality";
import changePreventer from '../assets/images/change-preventers.png'
import dispensables from '../assets/images/dispensables.png'
import comments from '../assets/images/comments.png'
import dataClass from '../assets/images/data-class.png'
import deadCode from '../assets/images/dead-code.png'
import divergentChange from '../assets/images/divergent-change.png'
import duplicateCode from '../assets/images/duplicate-code.png'
import lazyClass from '../assets/images/lazy-class.png'
import parallelInheritanceHierarchies from '../assets/images/parallel-inheritance-hierarchies.png'
import shotgunSurgery from '../assets/images/shotgun-surgery.png'
import speculativeGenerality from '../assets/images/speculative-generality.png'

export const smellData: ISmell[] = ([
  {
    id: 1,
    name: 'The Change Preventers',
    type: 'the-change-preventers',
    description: '"The Change Preventers" merujuk pada bad code smell yang berkaitan dengan code yang mempersulit kita ketika ingin melakukan perubahan atau penambahan fitur.',
    image: changePreventer,
    style: 'w-1/2',
    volume: '50%',
    owner: '2602064802 - Steven',
    smell: [
      {
        id: 1,
        name: 'Divergent Change',
        description: 'Divergent Change adalah sebuah code smell yang terjadi ketika perubahan dalam suatu metode menyebabkan perubahan pada berbagai bagian metode yang tidak berhubungan juga harus diubah.',
        solutions: ['Extract Class', 'Extract Superclass', 'Extract Subclass'],
        type: 'divergent-change',
        image: divergentChange,
        codeBefore: divergentChangeBefore,
        codeAfter: divergentChangeAfter,
        explanation: 'Perbedaan pada before after codingan diatas terletak pada Class ShoppingCart dimana awalnya function addItem dan removeItem melakukan perubahan pada totalPrice, dimana jika terjadi perubahan pada logika perhitungan harga maka function addItem dan removeItem juga harus diubah.'
      },
      {
        id: 2,
        name: 'Shotgun Surgery',
        description: 'Shotgun Surgery adalah sebuah code smell yang terjadi ketika perubahan yang dilakukan mengharuskan kita untuk melakukan banyak perubahan pada class lain. Ini dapat terjadi ketika penerapan Divergent Change dilakukan secara berlebihan.',
        solutions: ['Move Method', 'Move Field', 'Inline Class'],
        type: 'shotgun-surgery',
        image: shotgunSurgery,
        codeBefore: shotgunSurgeryBefore,
        codeAfter: shotgunSurgeryAfter,
        explanation: 'Pada class sebelumnya, fungsionalitas class Product tersebar di berbagai class. Jika kita perlu mengubah sesuatu terkait produk, kita perlu memodifikasi di beberapa class, ini menyebabkan bad code smell Shotgun Surgery. Setelah direfactor, kita menggabungkan semua fungsionalitas terkait produk ke dalam satu class Product. Dengan demikian, jika ada perubahan atau penambahan yang diperlukan untuk produk, kita hanya perlu memodifikasi satu class saja yaitu class Product, ini membuat code lebih mudah dikelola dan mengurangi risiko Shotgun Surgery.'
      },
      {
        id: 3,
        name: 'Parallel Inheritance Hierarchies',
        description: 'Parallel Inheritance Hierarchies adalah sebuah code smell yang terjadi ketika dua atau lebih class terkait secara paralel dalam hierarki subclass yang sama, sehingga jika salah satu diubah, class lainnya juga harus diubah.',
        solutions: ['Move Method', 'Move Field'],
        type: 'parallel-inheritance-hierarchies',
        image: parallelInheritanceHierarchies,
        codeBefore: parallelInheritanceHierarchiesBefore,
        codeAfter: parallelInheritanceHierarchiesAfter,
        explanation: 'Setelah coding di refacotr, kita menyetarakan objek Mode dalam class Kendaraan. Ini menghilankan hubungan hierarki antara class Kendaraan dan Mode, yang kemudian membuat setiap objek Kendaraan memiliki objek Mode.'
      }
    ]
  },
  {
    id: 2,
    name: 'The Dispensables',
    type: 'the-dispensables',
    description: '"The Dispensables" merujuk pada bad code smell yang berkaitan dengan bagian-bagian code kurang berguna dan bisa dibuang. Code-code yang terindikasi dalam smell tersebut sebetulnya tidak diperlukan dan tidak mempengaruhi jalannya suatu project sama sekali sehingga dapat dibuang.',
    image: dispensables,
    style: 'w-9/12',
    volume: '75%',
    owner: '2602075440 - Wilson',
    smell: [
      {
        id: 1,
        name: 'Comments',
        description: 'Comment adalah sebuah code smell yang terjadi ketika komentar digunakan secara berlebihan atau tidak dibutuhkan, yang menandakan bahwa kode tersebut mungkin tidak cukup jelas. Hal ini membuat kode sulit dipahami dan dipelihara.',
        solutions: ['Extract Variable', 'Extract Method', 'Rename Method', 'Introduce Assertion'],
        type: 'comments',
        image: comments,
        codeBefore: commentBefore,
        codeAfter: commentAfter,
        explanation: 'Setelah menghapus comment yang tidak perlu, code menjadi lebih bersih dan lebih mudah dibaca. Comment yang dihapus tidak memberikan informasi tambahan yang signifikan, karena tindakan yang dilakukan oleh method add() sudah cukup jelas dari nama metode dan operasi matematika yang dilakukan di dalamnya. Dalam kasus ini, nama method yang deskriptif sudah cukup untuk menjelaskan apa yang dilakukan oleh code tersebut.'
      },
      {
        id: 2,
        name: 'Duplicate Code',
        description: 'Duplicate code adalah sebuah code smell yang terjadi ketika terdapat beberapa bagian kode yang sama atau sangat mirip dalam satu proyek.',
        solutions: ['Extract Method', 'Pull Up Field', 'Pull Up Constructor Body', 'Form Template Method', 'Substitute Algorithm', 'Extract Superclass', 'Extract Class', 'Consolidate Conditional Expression', 'Consolidate Duplicate Conditional Fragments'],
        type: 'duplicate-code',
        image: duplicateCode,
        codeBefore: duplicateCodeBefore,
        codeAfter: duplicateCodeAfter,
        explanation: 'Dalam class calculator terdapat method add dan total, keduanya memiliki fungsi yang sama yaitu untuk menambahkan bilangan. Ini disebut dengan Duplicate Code, untuk menghindari pengulangan code yang tidak perlu, kita dapat menghapus salah satu method tersebut. Dengan begitu duplicate code telah hilang dan membuat code semakin efisien.'
      },
      {
        id: 3,
        name: 'Lazy Class',
        description: 'Lazy Class adalah sebuah code smell di mana sebuah class tidak memberikan kontribusi yang signifikan terhadap sistem. Class tersebut mungkin memiliki metode atau variabel, tetapi pada umumnya lebih baik jika class tersebut digabungkan dengan class lain atau dihapus.',
        solutions: ['Inline Class', 'Collapse Hierarchy'],
        type: 'lazy-class',
        image: lazyClass,
        codeBefore: lazyClassBefore,
        codeAfter: lazyClassAfter,
        explanation: 'Pada code before terdapat class Strength dan Person, yang dimana pada class Person mengambil value strength dari class Strength. Mungkin terlihat tidak ada yang salah disini, namun ini merupakan bad code smell dari Lazy Class yang dimana class Strength hanya digunakan pada class Person. Dalam hal ini, class Strength tidak menyediakan cukup fungsionalitas untuk membenarkan keberadaannya sebagai kelas terpisah. Oleh karena itu, sebagai refaktorisasi, kita dapat menghapus class Strength dan menggantinya dengan menggunakan tipe data langsung dalam class Person, sehingga menghindari overhead yang tidak perlu.'
      },
      {
        id: 4,
        name: 'Data Class',
        description: 'Data Class adalah sebuah code smell yang mengacu pada class yang hanya berisi field dan metode mentah untuk mengaksesnya. Biasanya class ini digunakan untuk operasi di class lain, jadi pada class ini tidak dapat mengoperasikan sebuah data yang mereka miliki',
        solutions: ['Encapsulate Field', 'Encapsulate Collection', 'Move Method', 'Extract Method', 'Remove Setting Method', 'Hide Method'],
        type: 'data-class',
        image: dataClass,
        codeBefore: dataClassBefore,
        codeAfter: dataClassAfter,
        explanation: 'Dengan mengubah atribut menjadi private, kita memiliki kontrol lebih baik atas bagaimana data dapat diakses dan dimodifikasi, dan kita dapat menerapkan validasi atau logika tambahan jika dibutuhkan. Ini mengurangi masalah yang dapat timbul karena penggunaan atribut public dan meningkatkan keamanan serta pemeliharaan code.'
      },
      {
        id: 5,
        name: 'Dead Code',
        description: 'Dead Code adalah sebuah code smell yang mengacu pada sebuah variable, parameter, field, method dan class yang tidak lagi digunakan. Karena sebetulnya code tersebut tidak diperlukan, ini membuat sistem menjadi lebih berat.',
        solutions: ['Inline Class', 'Collapse Hierarchy', 'Remove Parameter'],
        type: 'dead-code',
        image: deadCode,
        codeBefore: deadCodeBefore,
        codeAfter: deadCodeAfter,
        explanation: 'Pada line 5-11 terdapat code yang tidak perlu, karena setelahnya terdapat sebuah validasi yang serupa. Ini membuat bad code smell Dead Code, yang dimana code itu sebenanarnya tidak diperlukan. Setelah menghapus code yang tidak perlu, code menjadi lebih bersih dan mudah dibaca. Selain itu, ini membuat code kita lebih ringan karena menghilangkan code yang tidak diperlukan.'
      },
      {
        id: 6,
        name: 'Speculative Generality',
        description: 'Speculative Generality adalah sebuah code smell yang menambahkan class, method, field, atau parameter yang tidak diperlukan berdasarkan spekulasi atau asumsi tentang kebutuhan masa depan. Ini sering disebabkan oleh keinginan programmer untuk mencakup kemungkinan penggunaan di masa mendatang, tetapi pada kenyataannya, fitur tersebut tidak pernah diminta atau digunakan',
        solutions: ['Collapse Hierarchy', 'Inline Class', 'Inline Method', 'Remove Parameter'],
        type: 'speculative-generality',
        image: speculativeGenerality,
        codeBefore: speculativeGeneralityBefore,
        codeAfter: speculativeGeneralityAfter,
        explanation: 'Programmer mengasumsikan bahwa pada class Person sewaktu-waktu akan menggunakan method pray() karena pada awalnya method ini dibuat dengan asumsi bahwa pada class Person akan ada metode untuk berdoa. Namun seiringnya berjalan waktu, asumsi ini tidak terbukti dan membuatnya menjadi bad code smell "Speculative Genereality" yang membuat sistem menjadi berat.'
      }
    ]
  }
])