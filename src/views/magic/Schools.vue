<template>
   <h1 class="my-2">Заклинания</h1>
   <div class="row mx-2 my-3">
      <div class="col-2 px-1">
         <div
            :class="'btn btn-secondary w-100 ' + (filter == filterOptions.nameAsc || filter == filterOptions.nameDesc ? ' ' : ' inactive')"
            v-on:click="filter = filter != filterOptions.nameAsc ? filterOptions.nameAsc : filterOptions.nameDesc"
         >
            <i :class="'fas ' + (filter != filterOptions.nameDesc ? 'fa-sort-alpha-down' : 'fa-sort-alpha-down-alt')"></i>
         </div>
      </div>
      <div class="dropdown col-8 px-1">
         <button class="btn btn-secondary dropdown-toggle w-100" type="button" data-bs-toggle="dropdown">
            {{ magicSchoolOptions[tab] }}
         </button>
         <ul class="dropdown-menu">
            <li v-for="(school, index) in magicSchoolOptions" :key="index">
               <div :class="'dropdown-item px-2 ' + (tab == index ? 'active' : '')" v-on:click="tab = index">
                  <span class="fas fa-circle pe-1" :style="'color: ' + schoolColor(school)"></span>
                  {{ school }}
               </div>
            </li>
         </ul>
      </div>
      <div class="col-2 px-1">
         <div
            :class="'btn btn-secondary w-100 ' + (filter == filterOptions.levelAsc || filter == filterOptions.levelDesc ? ' ' : ' inactive')"
            v-on:click="filter = filter != filterOptions.levelAsc ? filterOptions.levelAsc : filterOptions.levelDesc"
         >
            <i :class="'fas ' + (filter != filterOptions.levelDesc ? 'fa-sort-numeric-down' : 'fa-sort-numeric-down-alt')"></i>
         </div>
      </div>
   </div>

   <div class="row mx-0 accordion" id="spell-list">
      <div class="col-12" v-for="spell in spells" :key="spell">
         <spell :spell="spell" />
      </div>
   </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import MagicService from './magic.service';
import MagicSchool from './magic-school';
import MagicSpell from './magic-spell';
import { MagicFilter } from './magic-filter';
import Spell from './Spell.vue';

@Options({
   components: { Spell },
})
export default class Schools extends Vue {
   service: MagicService = new MagicService();
   magicSchools: MagicSchool[] = [];
   tab = 0;
   filter = MagicFilter.nameAsc;
   filterOptions = MagicFilter;

   created(): void {
      this.getData();
   }

   getData(): void {
      this.magicSchools = this.service.getAll();
   }

   get magicSchoolOptions(): string[] {
      return ['Все школы'].concat(this.magicSchools.map((x) => x.name));
   }

   get spells(): MagicSpell[] {
      var result = this.magicSchools
         .filter((school) => this.tab == 0 || school.id == this.tab)
         .map((school) => school.spells)
         .reduce((a, b) => a.concat(b));
      switch (this.filter) {
         case MagicFilter.nameAsc:
            return result.sort((a, b) => (a.name > b.name ? 1 : -1));
         case MagicFilter.nameDesc:
            return result.sort((a, b) => (a.name < b.name ? 1 : -1));
         case MagicFilter.levelAsc:
            return result.sort((a, b) => (a.level > b.level ? 1 : -1));
         case MagicFilter.levelDesc:
            return result.sort((a, b) => (a.level < b.level ? 1 : -1));
      }
      return result;
   }

   schoolColor(name: string): string {
      return this.service.schoolColor(name);
   }
}
</script>
