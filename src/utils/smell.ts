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

export const smellData: ISmell[] = ([
  {
    id: 1,
    name: 'The Change Preventers',
    type: 'the-change-preventers',
    description: '"The Change Preventers" merujuk pada bad code smell yang berkaitan dengan code yang mempersulit kita ketika ingin melakukan perubahan atau penambahan fitur.',
    style: 'w-1/2',
    volume: '50%',
    owner: '2602064802 - Steven',
    smell: [
      {
        id: 1,
        name: 'Divergent Change',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        solutions: ['a', 'b'],
        type: 'divergent-change',
        codeBefore: divergentChangeBefore,
        codeAfter: divergentChangeAfter,
      },
      {
        id: 2,
        name: 'Shotgun Surgery',
        description: 'Smell ini terjadi ketika kita ingin mengganti atau menambahkan fitur ke dalam code, kita perlu mengganti bagian code yang tersebar di banyak class lain',
        solutions: ['Move Method', 'Move Field', 'Inline Class'],
        type: 'shotgun-surgery',
        codeBefore: shotgunSurgeryBefore,
        codeAfter: shotgunSurgeryAfter,
      },
      {
        id: 3,
        name: 'Parallel Inheritance Hierarchies',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        solutions: ['a', 'b'],
        type: 'parallel-inheritance-hierarchies',
        codeBefore: parallelInheritanceHierarchiesBefore,
        codeAfter: parallelInheritanceHierarchiesAfter,
      }
    ]
  },
  {
    id: 2,
    name: 'The Dispensables',
    type: 'the-dispensables',
    description: '"The Dispensables" merujuk pada bad code smell yang berkaitan dengan bagian-bagian code kurang berguna dan bisa dibuang. Code-code yang terindikasi dalam smell tersebut sebetulnya tidak diperlukan dan tidak mempengaruhi jalannya suatu project sama sekali sehingga dapat dibuang.',
    style: 'w-9/12',
    volume: '75%',
    owner: '2602075440 - Wilson',
    smell: [
      {
        id: 1,
        name: 'Comments',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        solutions: ['a', 'b'],
        type: 'comments',
        codeBefore: commentBefore,
        codeAfter: commentAfter
      },
      {
        id: 2,
        name: 'Duplicate Code',
        description: 'Smell ini terjadi ketika beberapa programmer mengerjakan bagian yang berbeda dari program yang sama pada waktu yang sama. Karena mereka mengerjakan tugas yang berbeda, mereka mungkin tidak menyadari bahwa rekan mereka telah menulis kode serupa yang dapat digunakan kembali untuk kebutuhan mereka sendiri.',
        solutions: ['Extract Method', 'Pull Up Constructor Body', 'Form Template Method', 'Substitute Algorithm'],
        type: 'duplicate-code',
        codeBefore: duplicateCodeBefore,
        codeAfter: duplicateCodeAfter,
      },
      {
        id: 3,
        name: 'Lazy Class',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        solutions: ['a', 'b'],
        type: 'lazy-class',
        codeBefore: lazyClassBefore,
        codeAfter: lazyClassAfter,
      },
      {
        id: 4,
        name: 'Data Class',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        solutions: ['a', 'b'],
        type: 'data-class',
        codeBefore: dataClassBefore,
        codeAfter: dataClassAfter,
      },
      {
        id: 5,
        name: 'Dead Code',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        solutions: ['a', 'b'],
        type: 'dead-code',
        codeBefore: deadCodeBefore,
        codeAfter: deadCodeAfter,
      },
      {
        id: 6,
        name: 'Speculative Generality',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        solutions: ['a', 'b'],
        type: 'speculative-generality',
        codeBefore: speculativeGeneralityBefore,
        codeAfter: speculativeGeneralityAfter,
      }
    ]
  }
])