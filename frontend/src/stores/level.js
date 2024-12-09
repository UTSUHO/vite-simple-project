// Utilities
import { defineStore } from 'pinia'
// import { queryLevelData } from '@/api/level';
export const useLevelStore = defineStore('level', () => {
    const levelData = ref();
    const owlsPrice = ref(45)
    // function queryLevel() {
    //     queryLevelData().then((res) => {
    //         console.log(res)
    //         if (res.statusCode == 200) {
    //             levelData.value = res.data
    //             owlsPrice.value = res.data['level0'].price
    //         }
    //       })
    //  }
    function getLevelData() {
        return levelData.value
    }
    return {
        levelData,
        owlsPrice,
        // queryLevel,
        getLevelData
    };
})
