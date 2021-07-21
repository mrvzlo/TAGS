import MagicSchool from './magic-school';
import MagicSpell from './magic-spell';

export default class MagicService {
   getAll(): MagicSchool[] {
      return require('@/json/magic.json');
   }

   spellColor(spell: number): string {
      const school = this.getAll().filter((x) => x.spells.map((y) => y.id).includes(spell))[0];
      return school ? school.color : '';
   }

   schoolColor(name: string): string {
      const school = this.getAll().filter((x) => x.name == name)[0];
      return school ? school.color : '#6c757d';
   }
}
