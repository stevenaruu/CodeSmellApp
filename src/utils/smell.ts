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
        description: 'Divergent Change adalah situasi di mana jika terjadi perubahan dalam sebuah sistem sehingga berbagai bagian dari sistem tersebut juga harus diubah.',
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
        description: 'Smell ini terjadi ketika kita ingin mengganti atau menambahkan fitur ke dalam code, kita perlu mengganti bagian code yang tersebar di banyak class lain',
        solutions: ['Move Method', 'Move Field', 'Inline Class'],
        type: 'shotgun-surgery',
        image: shotgunSurgery,
        codeBefore: shotgunSurgeryBefore,
        codeAfter: shotgunSurgeryAfter,
        explanation: ''
      },
      {
        id: 3,
        name: 'Parallel Inheritance Hierarchies',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        solutions: ['Move Method', 'Move Field'],
        type: 'parallel-inheritance-hierarchies',
        image: parallelInheritanceHierarchies,
        codeBefore: parallelInheritanceHierarchiesBefore,
        codeAfter: parallelInheritanceHierarchiesAfter,
        explanation: ''
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
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        solutions: ['Extract Variable', 'Extract Method', 'Rename Method', 'Introduce Assertion'],
        type: 'comments',
        image: comments,
        codeBefore: commentBefore,
        codeAfter: commentAfter,
        explanation: ''
      },
      {
        id: 2,
        name: 'Duplicate Code',
        description: 'Smell ini terjadi ketika beberapa programmer mengerjakan bagian yang berbeda dari program yang sama pada waktu yang sama. Karena mereka mengerjakan tugas yang berbeda, mereka mungkin tidak menyadari bahwa rekan mereka telah menulis kode serupa yang dapat digunakan kembali untuk kebutuhan mereka sendiri.',
        solutions: ['Extract Method', 'Pull Up Field', 'Pull Up Constructor Body', 'Form Template Method', 'Substitute Algorithm', 'Extract Superclass', 'Extract Class', 'Consolidate Conditional Expression', ' Consolidate Duplicate Conditional Fragments'],
        type: 'duplicate-code',
        image: duplicateCode,
        codeBefore: duplicateCodeBefore,
        codeAfter: duplicateCodeAfter,
        explanation: ''
      },
      {
        id: 3,
        name: 'Lazy Class',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        solutions: ['Inline Class', 'Collapse Hierarchy'],
        type: 'lazy-class',
        image: lazyClass,
        codeBefore: lazyClassBefore,
        codeAfter: lazyClassAfter,
        explanation: ''
      },
      {
        id: 4,
        name: 'Data Class',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        solutions: ['Encapsulate Field', 'Encapsulate Collection', 'Move Method', 'Extract Method', 'Remove Setting Method', 'Hide Method'],
        type: 'data-class',
        image: dataClass,
        codeBefore: dataClassBefore,
        codeAfter: dataClassAfter,
        explanation: ''
      },
      {
        id: 5,
        name: 'Dead Code',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        solutions: ['Inline Class', 'Collapse Hierarchy', 'Remove Parameter'],
        type: 'dead-code',
        image: deadCode,
        codeBefore: deadCodeBefore,
        codeAfter: deadCodeAfter,
        explanation: ''
      },
      {
        id: 6,
        name: 'Speculative Generality',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        solutions: ['Collapse Hierarchy', 'Inline Class', 'Inline Method', 'Remove Parameter'],
        type: 'speculative-generality',
        image: speculativeGenerality,
        codeBefore: speculativeGeneralityBefore,
        codeAfter: speculativeGeneralityAfter,
        explanation: ''
      }
    ]
  }
])