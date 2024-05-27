<script setup lang="ts">
import router from '../router';
//const emits = defineEmits(['update:start']);


const handlerStart = () => {
    //emits('update:start', false);
    router.push({name: 'Login'});
}

</script>

<template>
    <div class="p-10">

        <!-- titulo -->
        <div class="text-[#1A1A1A] text-5xl font-bold mb-56 mt-10">
            <h1>Define</h1>
            <h1>yourself in</h1>
            <h1>your unique</h1>
            <h1>way.</h1>
        </div>

        <!-- textos y boton -->
        <div class="flex flex-col justify-center">
            <div class="mb-4 text-center">
                <h2 class="text-2xl font-bold text-white">Future Store</h2>
                <h3 class="text-white">atrevete a ser diferente</h3>
            </div>
            <button @click="handlerStart" class="bg-black text-white rounded-lg ">
                <h2 class="pt-3 pb-3">
                    Comenzar
                </h2>
            </button>
        </div>

    </div>
</template>