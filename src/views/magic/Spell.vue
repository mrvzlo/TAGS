<template>
   <div class="card mb-2 accordion-item">
      <div class="card-header d-flex justify-content-between border-bottom-0" data-bs-toggle="collapse" :data-bs-target="'#spell-' + spell.id">
         <span class="fas fa-circle circle-24 h4 m-0" :style="'color: ' + spellColor(spell.id)"></span>
         <span>{{ spell.name }}</span>
         <span class="bg-primary text-white circle-24 rounded-pill">{{ spell.level }}</span>
      </div>
      <div class="card-body text-start accordion-collapse collapse p-0" :id="'spell-' + spell.id" data-bs-parent="#spell-list">
         <div class="p-2 border-top">
            <div class="d-flex justify-content-between">
               <div><span class="fw-bold">Длительность:</span> {{ spell.duration }}</div>
               <div><span class="fw-bold">Цена:</span> {{ spell.cost }}</div>
            </div>
         </div>
         <div class="p-2 border-top">
            {{ spell.effect }}
         </div>
      </div>
   </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import MagicService from './magic.service';

@Options({
   props: { spell: Object },
})
export default class Spell extends Vue {
   service: MagicService = new MagicService();

   spellColor(id: number): string {
      return this.service.spellColor(id);
   }
}
</script>
