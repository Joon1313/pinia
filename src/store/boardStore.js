import { ref } from "vue"
import { defineStore } from 'pinia'

export const useBoardStore = defineStore('board', () => {

  const 좋아요 = ref(0)
  const 좋아요증가 = () => 좋아요.value += 1;
  const 좋아요감소 = () => 좋아요.value -= 1;

  const 공유 = ref(0)
  const 공유증가 = () => 공유.value += 1;
  const 공유감소 = () => 공유.value -= 1;

  const 조회수 = ref(0)
  const 조회수증가 = () => 조회수.value += 1;
  const 조회수감소 = () => 조회수.value -= 1;
  
  const 신고 = ref(0)
  const 신고증가 = () => 신고.value += 1;
  const 신고감소 = () => 신고.value -= 1;


  return { 
    좋아요, 좋아요증가, 좋아요감소,
    공유, 공유증가, 공유감소,
    조회수, 조회수증가, 조회수감소,
    신고, 신고증가, 신고감소,
  }
})


