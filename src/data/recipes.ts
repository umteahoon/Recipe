export interface Recipe {
  id: number;
  title: string;
  description: string;
  image: string;
  time: string;
  likes: number;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
  servings: number;
  ingredients: string[];
  instructions: string[];
}

export const recipeData: Recipe[] = [
  // 한식
  {
    id: 1,
    title: "얼큰한 김치찌개",
    description: "묵은지와 삼겹살로 만드는 깊고 풍부한 맛의 김치찌개 레시피입니다. 추운 날씨에 안성맞춤!",
    image: "/images/kimchi_stew_20251117_084238.png",
    time: "30분",
    likes: 36,
    category: "한식",
    difficulty: "easy",
    servings: 4,
    ingredients: ["묵은지 300g", "삼겹살 200g", "두부 1모", "대파 1대", "마늘 3쪽", "고춧가루 1큰술"],
    instructions: ["삼겹살을 먼저 볶아주세요", "묵은지를 넣고 함께 볶아주세요", "물을 넣고 끓여주세요", "두부와 대파를 넣고 마무리하세요"]
  },
  {
    id: 2,
    title: "영양 가득 비빔밥",
    description: "각종 나물과 계란 프라이를 곁들인 건강한 비빔밥 만드는 법을 소개합니다.",
    image: "/images/bibimbap_20251117_084239.png",
    time: "45분",
    likes: 29,
    category: "한식",
    difficulty: "medium",
    servings: 2,
    ingredients: ["밥 2공기", "시금치 100g", "당근 1개", "콩나물 100g", "계란 2개", "고추장 2큰술"],
    instructions: ["각종 나물을 데쳐서 양념해주세요", "계란을 프라이로 만들어주세요", "밥 위에 나물들을 예쁘게 올려주세요", "고추장과 함께 비벼드세요"]
  },
  {
    id: 3,
    title: "명절 필수 잡채",
    description: "고소한 참기름 향과 각종 채소를 듬뿍 넣은 특별한 잡채 레시피를 만나보세요.",
    image: "/images/japchae_20251117_084240.png",
    time: "35분",
    likes: 22,
    category: "한식",
    difficulty: "medium",
    servings: 4,
    ingredients: ["당면 200g", "소고기 100g", "시금치 100g", "당근 1개", "양파 1개", "참기름 2큰술"],
    instructions: ["당면을 삶아서 준비해주세요", "각종 채소를 볶아주세요", "소고기를 양념해서 볶아주세요", "모든 재료를 섞어서 완성하세요"]
  },
  {
    id: 4,
    title: "양념이 쏙쏙 배어든 불고기",
    description: "특제 양념으로 재워 부드럽고 달콤한 맛이 일품인 한국식 불고기 요리법입니다.",
    image: "/images/bulgogi_20251117_084239.png",
    time: "40분",
    likes: 18,
    category: "한식",
    difficulty: "easy",
    servings: 3,
    ingredients: ["소고기 300g", "양파 1개", "배 1/2개", "간장 3큰술", "설탕 1큰술", "마늘 4쪽"],
    instructions: ["소고기를 얇게 썰어주세요", "양념장을 만들어주세요", "고기를 양념에 재워주세요", "팬에 볶아서 완성하세요"]
  },
  {
    id: 5,
    title: "얼큰한 순두부찌개",
    description: "부드러운 순두부와 매콤한 국물이 일품인 순두부찌개입니다.",
    image: "/images/korean_food_5_20251119_123242.png",
    time: "25분",
    likes: 31,
    category: "한식",
    difficulty: "easy",
    servings: 2,
    ingredients: ["순두부 1팩", "돼지고기 100g", "김치 100g", "대파 1대", "고춧가루 1큰술", "마늘 2쪽"],
    instructions: ["돼지고기를 볶아주세요", "김치를 넣고 볶아주세요", "물을 넣고 끓여주세요", "순두부를 넣고 마무리하세요"]
  },

  // 양식
  {
    id: 6,
    title: "크리미 카르보나라",
    description: "진짜 이탈리아 스타일의 크리미한 카르보나라 파스타입니다.",
    image: "/images/western_food_1_20251119_123159.png",
    time: "20분",
    likes: 45,
    category: "양식",
    difficulty: "medium",
    servings: 2,
    ingredients: ["스파게티 200g", "베이컨 100g", "달걀 2개", "파마산 치즈 50g", "후추", "마늘 2쪽"],
    instructions: ["스파게티를 삶아주세요", "베이컨을 바삭하게 볶아주세요", "달걀과 치즈를 섞어주세요", "모든 재료를 섞어서 완성하세요"]
  },
  {
    id: 7,
    title: "완벽한 스테이크",
    description: "레스토랑 수준의 완벽한 스테이크를 집에서 만들어보세요.",
    image: "/images/western_food_2_20251119_123206.png",
    time: "15분",
    likes: 38,
    category: "양식",
    difficulty: "hard",
    servings: 2,
    ingredients: ["소고기 스테이크 2장", "버터 2큰술", "로즈마리", "마늘 3쪽", "소금", "후추"],
    instructions: ["스테이크를 실온에 두세요", "팬을 뜨겁게 달궈주세요", "스테이크를 구워주세요", "버터와 허브로 마무리하세요"]
  },
  {
    id: 8,
    title: "시저 샐러드",
    description: "신선한 로메인과 바삭한 크루통이 어우러진 클래식 시저 샐러드입니다.",
    image: "/images/western_food_3_20251119_123200.png",
    time: "15분",
    likes: 27,
    category: "양식",
    difficulty: "easy",
    servings: 2,
    ingredients: ["로메인 상추 1포기", "크루통 1컵", "파마산 치즈", "시저 드레싱", "닭가슴살 1장"],
    instructions: ["상추를 깨끗이 씻어주세요", "닭가슴살을 구워주세요", "드레싱을 만들어주세요", "모든 재료를 섞어서 완성하세요"]
  },
  {
    id: 9,
    title: "마르게리타 피자",
    description: "신선한 바질과 모짜렐라가 들어간 클래식 마르게리타 피자입니다.",
    image: "/images/western_food_4_20251119_123154.png",
    time: "30분",
    likes: 42,
    category: "양식",
    difficulty: "medium",
    servings: 4,
    ingredients: ["피자 도우 1장", "토마토 소스", "모짜렐라 치즈", "신선한 바질", "올리브오일"],
    instructions: ["도우를 펼쳐주세요", "토마토 소스를 발라주세요", "치즈를 올려주세요", "오븐에서 구워주세요"]
  },
  {
    id: 10,
    title: "프렌치 어니언 수프",
    description: "깊은 맛의 양파와 치즈가 어우러진 프랑스 전통 수프입니다.",
    image: "/images/western_food_5_20251117_084240.png",
    time: "45분",
    likes: 33,
    category: "양식",
    difficulty: "medium",
    servings: 4,
    ingredients: ["양파 4개", "쇠고기 육수 1L", "그뤼에르 치즈", "바게트", "버터", "화이트 와인"],
    instructions: ["양파를 캐러멜라이즈해주세요", "육수를 넣고 끓여주세요", "바게트에 치즈를 올려주세요", "수프 위에 올려서 완성하세요"]
  },

  // 일식
  {
    id: 11,
    title: "신선한 스시 플래터",
    description: "다양한 종류의 신선한 스시를 한 번에 즐길 수 있는 플래터입니다.",
    image: "/images/japanese_food_1_20251119_123201.png",
    time: "60분",
    likes: 52,
    category: "일식",
    difficulty: "hard",
    servings: 4,
    ingredients: ["스시용 쌀 2컵", "연어 200g", "참치 200g", "새우 8마리", "김", "와사비"],
    instructions: ["스시 밥을 준비해주세요", "생선을 손질해주세요", "스시를 만들어주세요", "예쁘게 플레이팅하세요"]
  },
  {
    id: 12,
    title: "진짜 일본 라멘",
    description: "진한 돈코츠 국물과 쫄깃한 면이 일품인 정통 일본 라멘입니다.",
    image: "/images/japanese_food_2_20251119_123154.png",
    time: "120분",
    likes: 67,
    category: "일식",
    difficulty: "hard",
    servings: 2,
    ingredients: ["라멘 면 2인분", "돼지뼈 1kg", "차슈 200g", "반숙 계란 2개", "대파", "김"],
    instructions: ["돼지뼈로 육수를 우려주세요", "차슈를 만들어주세요", "면을 삶아주세요", "토핑과 함께 완성하세요"]
  },
  {
    id: 13,
    title: "바삭한 새우 튀김",
    description: "겉은 바삭하고 속은 촉촉한 일본식 새우 튀김입니다.",
    image: "/images/japanese_food_3_20251119_123200.png",
    time: "25분",
    likes: 41,
    category: "일식",
    difficulty: "medium",
    servings: 3,
    ingredients: ["새우 12마리", "튀김가루 1컵", "얼음물", "식용유", "텐츠유 소스"],
    instructions: ["새우를 손질해주세요", "튀김옷을 만들어주세요", "기름에 튀겨주세요", "소스와 함께 서빙하세요"]
  },
  {
    id: 14,
    title: "데리야키 치킨",
    description: "달콤짭짤한 데리야키 소스가 일품인 일본식 치킨입니다.",
    image: "/images/japanese_food_4_20251119_123154.png",
    time: "30분",
    likes: 35,
    category: "일식",
    difficulty: "easy",
    servings: 2,
    ingredients: ["닭다리살 4조각", "간장 3큰술", "미림 2큰술", "설탕 1큰술", "마늘", "생강"],
    instructions: ["닭고기를 구워주세요", "데리야키 소스를 만들어주세요", "소스를 발라가며 구워주세요", "밥과 함께 서빙하세요"]
  },
  {
    id: 15,
    title: "따뜻한 미소 수프",
    description: "일본 가정식의 기본인 따뜻하고 구수한 미소 수프입니다.",
    image: "/images/japanese_food_5_20251119_123153.png",
    time: "15분",
    likes: 28,
    category: "일식",
    difficulty: "easy",
    servings: 4,
    ingredients: ["된장 3큰술", "다시마 육수 4컵", "두부 1/2모", "미역", "대파"],
    instructions: ["다시마 육수를 끓여주세요", "된장을 풀어주세요", "두부와 미역을 넣어주세요", "대파를 넣고 마무리하세요"]
  },

  // 중식
  {
    id: 16,
    title: "궁보 치킨",
    description: "매콤달콤한 궁보 소스와 바삭한 땅콩이 어우러진 중국 요리입니다.",
    image: "/images/chinese_food_1_20251119_123205.png",
    time: "25분",
    likes: 39,
    category: "중식",
    difficulty: "medium",
    servings: 3,
    ingredients: ["닭가슴살 300g", "땅콩 1/2컵", "청양고추 2개", "마늘", "생강", "궁보 소스"],
    instructions: ["닭고기를 한입 크기로 썰어주세요", "팬에 기름을 두르고 볶아주세요", "궁보 소스를 넣어주세요", "땅콩을 넣고 마무리하세요"]
  },
  {
    id: 17,
    title: "탕수육",
    description: "바삭한 돼지고기와 새콤달콤한 소스가 일품인 탕수육입니다.",
    image: "/images/chinese_food_2_20251119_123201.png",
    time: "40분",
    likes: 56,
    category: "중식",
    difficulty: "medium",
    servings: 4,
    ingredients: ["돼지고기 400g", "튀김가루", "파인애플", "피망", "양파", "탕수 소스"],
    instructions: ["돼지고기를 튀김옷을 입혀 튀겨주세요", "채소를 준비해주세요", "탕수 소스를 만들어주세요", "소스와 함께 버무려주세요"]
  },
  {
    id: 18,
    title: "볶음밥",
    description: "간단하지만 맛있는 중국식 볶음밥입니다.",
    image: "/images/chinese_food_3_20251119_123153.png",
    time: "15분",
    likes: 44,
    category: "중식",
    difficulty: "easy",
    servings: 2,
    ingredients: ["밥 2공기", "계란 2개", "햄 100g", "당근", "완두콩", "간장"],
    instructions: ["계란을 스크램블해주세요", "햄과 채소를 볶아주세요", "밥을 넣고 볶아주세요", "간장으로 간을 맞춰주세요"]
  },
  {
    id: 19,
    title: "마파두부",
    description: "매콤하고 얼큰한 사천식 마파두부입니다.",
    image: "/images/chinese_food_4_20251119_123159.png",
    time: "20분",
    likes: 33,
    category: "중식",
    difficulty: "medium",
    servings: 3,
    ingredients: ["두부 1모", "돼지고기 100g", "두반장 2큰술", "마라 소스", "대파", "마늘"],
    instructions: ["두부를 한입 크기로 썰어주세요", "돼지고기를 볶아주세요", "두반장을 넣고 볶아주세요", "두부를 넣고 조려주세요"]
  },
  {
    id: 20,
    title: "군만두",
    description: "바삭하게 구운 중국식 만두입니다.",
    image: "/images/chinese_food_5_20251119_123201.png",
    time: "30분",
    likes: 47,
    category: "중식",
    difficulty: "medium",
    servings: 4,
    ingredients: ["만두피 20장", "돼지고기 200g", "배추", "부추", "마늘", "생강"],
    instructions: ["만두소를 만들어주세요", "만두를 빚어주세요", "팬에 기름을 두르고 구워주세요", "물을 넣고 쪄주세요"]
  },

  // 베이킹
  {
    id: 21,
    title: "초콜릿 칩 쿠키",
    description: "바삭하고 달콤한 홈메이드 초콜릿 칩 쿠키입니다.",
    image: "/images/baking_1_20251119_123200.png",
    time: "45분",
    likes: 62,
    category: "베이킹",
    difficulty: "easy",
    servings: 24,
    ingredients: ["밀가루 2컵", "버터 1컵", "설탕 3/4컵", "계란 2개", "초콜릿 칩 1컵", "바닐라"],
    instructions: ["버터와 설탕을 크림화해주세요", "계란을 넣어주세요", "밀가루를 넣어 반죽해주세요", "오븐에서 구워주세요"]
  },
  {
    id: 22,
    title: "초콜릿 케이크",
    description: "촉촉하고 진한 초콜릿 케이크입니다.",
    image: "/images/baking_2_20251119_123154.png",
    time: "90분",
    likes: 78,
    category: "베이킹",
    difficulty: "hard",
    servings: 12,
    ingredients: ["밀가루 2컵", "코코아 파우더", "설탕 2컵", "계란 3개", "버터", "생크림"],
    instructions: ["케이크 반죽을 만들어주세요", "오븐에서 구워주세요", "크림을 만들어주세요", "케이크를 데코레이션해주세요"]
  },
  {
    id: 23,
    title: "버터 크루아상",
    description: "겹겹이 쌓인 버터가 일품인 프랑스식 크루아상입니다.",
    image: "/images/baking_3_20251119_123156.png",
    time: "180분",
    likes: 85,
    category: "베이킹",
    difficulty: "hard",
    servings: 8,
    ingredients: ["강력분 3컵", "버터 200g", "우유", "설탕", "소금", "이스트"],
    instructions: ["반죽을 만들어주세요", "버터를 접어 넣어주세요", "여러 번 접어주세요", "모양을 만들어 구워주세요"]
  },
  {
    id: 24,
    title: "홈메이드 식빵",
    description: "부드럽고 촉촉한 집에서 만든 식빵입니다.",
    image: "/images/baking_4_20251119_123205.png",
    time: "120분",
    likes: 54,
    category: "베이킹",
    difficulty: "medium",
    servings: 1,
    ingredients: ["강력분 3컵", "우유 1컵", "설탕 2큰술", "소금", "이스트", "버터"],
    instructions: ["반죽을 만들어주세요", "1차 발효시켜주세요", "모양을 만들어주세요", "2차 발효 후 구워주세요"]
  },
  {
    id: 25,
    title: "애플 파이",
    description: "바삭한 파이 크러스트와 달콤한 사과가 어우러진 애플 파이입니다.",
    image: "/images/baking_5_20251119_123205.png",
    time: "75분",
    likes: 69,
    category: "베이킹",
    difficulty: "medium",
    servings: 8,
    ingredients: ["사과 6개", "파이 크러스트", "설탕", "계피", "버터", "레몬즙"],
    instructions: ["사과를 썰어 양념해주세요", "파이 크러스트를 준비해주세요", "사과를 넣고 덮어주세요", "오븐에서 구워주세요"]
  },

  // 음료
  {
    id: 26,
    title: "베리 스무디 볼",
    description: "신선한 베리와 그래놀라가 들어간 건강한 스무디 볼입니다.",
    image: "/images/beverage_1_20251119_123250.png",
    time: "10분",
    likes: 43,
    category: "음료",
    difficulty: "easy",
    servings: 2,
    ingredients: ["냉동 베리 1컵", "바나나 1개", "요거트", "그래놀라", "꿀", "민트"],
    instructions: ["베리와 바나나를 갈아주세요", "볼에 담아주세요", "토핑을 올려주세요", "예쁘게 데코레이션하세요"]
  },
  {
    id: 27,
    title: "아이스 카페 라떼",
    description: "부드러운 우유 거품이 일품인 시원한 아이스 카페 라떼입니다.",
    image: "/images/beverage_2_20251119_123242.png",
    time: "5분",
    likes: 38,
    category: "음료",
    difficulty: "easy",
    servings: 1,
    ingredients: ["에스프레소 2샷", "우유 200ml", "얼음", "시럽"],
    instructions: ["에스프레소를 추출해주세요", "우유를 거품내주세요", "얼음을 넣어주세요", "예쁘게 라떼 아트를 그려주세요"]
  },
  {
    id: 28,
    title: "말차 라떼",
    description: "진한 말차의 향과 부드러운 우유가 어우러진 일본식 음료입니다.",
    image: "/images/beverage_3_20251119_123250.png",
    time: "8분",
    likes: 35,
    category: "음료",
    difficulty: "easy",
    servings: 1,
    ingredients: ["말차 가루 2티스푼", "우유 200ml", "설탕", "뜨거운 물"],
    instructions: ["말차를 뜨거운 물에 풀어주세요", "우유를 데워주세요", "말차와 우유를 섞어주세요", "거품을 올려 완성하세요"]
  },
  {
    id: 29,
    title: "상큼한 레모네이드",
    description: "신선한 레몬과 민트가 들어간 여름철 완벽한 음료입니다.",
    image: "/images/beverage_4_20251119_123242.png",
    time: "10분",
    likes: 41,
    category: "음료",
    difficulty: "easy",
    servings: 4,
    ingredients: ["레몬 4개", "설탕 1/2컵", "물 4컵", "민트", "얼음"],
    instructions: ["레몬을 짜서 즙을 내주세요", "설탕을 물에 녹여주세요", "레몬즙과 섞어주세요", "민트와 얼음을 넣어 완성하세요"]
  },
  {
    id: 30,
    title: "핫 초콜릿",
    description: "마시멜로우와 휘핑크림이 올라간 따뜻한 핫 초콜릿입니다.",
    image: "/images/beverage_5_20251119_123250.png",
    time: "12분",
    likes: 52,
    category: "음료",
    difficulty: "easy",
    servings: 2,
    ingredients: ["다크 초콜릿 100g", "우유 400ml", "마시멜로우", "휘핑크림", "계피"],
    instructions: ["초콜릿을 잘게 썰어주세요", "우유를 데워주세요", "초콜릿을 녹여주세요", "마시멜로우와 휘핑크림을 올려주세요"]
  },

  // 채식
  {
    id: 31,
    title: "퀴노아 샐러드",
    description: "영양가 높은 퀴노아와 신선한 채소가 들어간 건강한 샐러드입니다.",
    image: "/images/vegetarian_1_20251119_123250.png",
    time: "25분",
    likes: 37,
    category: "채식",
    difficulty: "easy",
    servings: 4,
    ingredients: ["퀴노아 1컵", "아보카도 1개", "방울토마토", "오이", "올리브오일", "레몬즙"],
    instructions: ["퀴노아를 삶아주세요", "채소를 썰어주세요", "드레싱을 만들어주세요", "모든 재료를 섞어주세요"]
  },
  {
    id: 32,
    title: "포토벨로 버거",
    description: "큰 포토벨로 버섯으로 만든 건강한 채식 버거입니다.",
    image: "/images/vegetarian_2_20251119_123244.png",
    time: "20분",
    likes: 29,
    category: "채식",
    difficulty: "medium",
    servings: 2,
    ingredients: ["포토벨로 버섯 2개", "버거번 2개", "상추", "토마토", "아보카도", "치즈"],
    instructions: ["버섯을 구워주세요", "채소를 준비해주세요", "버거번을 구워주세요", "모든 재료를 쌓아 완성하세요"]
  },
  {
    id: 33,
    title: "부다 볼",
    description: "다양한 채소와 곡물이 들어간 영양 만점 부다 볼입니다.",
    image: "/images/vegetarian_3_20251119_123254.png",
    time: "30분",
    likes: 45,
    category: "채식",
    difficulty: "medium",
    servings: 2,
    ingredients: ["현미 1컵", "두부 200g", "브로콜리", "당근", "아보카도", "타히니 소스"],
    instructions: ["현미를 삶아주세요", "두부를 구워주세요", "채소를 준비해주세요", "예쁘게 플레이팅하세요"]
  },
  {
    id: 34,
    title: "채소 볶음",
    description: "신선한 채소들을 볶아 만든 간단하고 맛있는 요리입니다.",
    image: "/images/vegetarian_4_20251119_123244.png",
    time: "15분",
    likes: 32,
    category: "채식",
    difficulty: "easy",
    servings: 3,
    ingredients: ["브로콜리", "파프리카", "양파", "마늘", "올리브오일", "간장"],
    instructions: ["채소를 썰어주세요", "팬에 기름을 두르고 볶아주세요", "간장으로 간을 맞춰주세요", "접시에 담아 완성하세요"]
  },
  {
    id: 35,
    title: "카프레제 샐러드",
    description: "신선한 모짜렐라와 토마토, 바질이 어우러진 이탈리아 샐러드입니다.",
    image: "/images/vegetarian_5_20251119_123244.png",
    time: "10분",
    likes: 28,
    category: "채식",
    difficulty: "easy",
    servings: 2,
    ingredients: ["모짜렐라 치즈", "토마토 2개", "신선한 바질", "올리브오일", "발사믹 식초", "소금"],
    instructions: ["토마토와 치즈를 썰어주세요", "접시에 번갈아 올려주세요", "바질을 올려주세요", "드레싱을 뿌려 완성하세요"]
  },

  // 간식
  {
    id: 36,
    title: "그래놀라 바",
    description: "견과류와 말린 과일이 들어간 건강한 수제 그래놀라 바입니다.",
    image: "/images/snack_1_20251119_123250.png",
    time: "30분",
    likes: 34,
    category: "간식",
    difficulty: "easy",
    servings: 12,
    ingredients: ["오트밀 2컵", "견과류", "말린 과일", "꿀", "코코넛오일"],
    instructions: ["재료를 섞어주세요", "팬에 눌러 담아주세요", "냉장고에서 굳혀주세요", "바 모양으로 잘라주세요"]
  },
  {
    id: 37,
    title: "과일 꼬치",
    description: "알록달록 예쁜 과일들로 만든 건강한 간식입니다.",
    image: "/images/snack_2_20251119_123249.png",
    time: "15분",
    likes: 26,
    category: "간식",
    difficulty: "easy",
    servings: 8,
    ingredients: ["딸기", "포도", "파인애플", "키위", "꼬치"],
    instructions: ["과일을 씻어주세요", "적당한 크기로 썰어주세요", "꼬치에 꽂아주세요", "예쁘게 플레이팅하세요"]
  },
  {
    id: 38,
    title: "허브 팝콘",
    description: "향긋한 허브와 스파이스가 들어간 고급 팝콘입니다.",
    image: "/images/snack_3_20251119_123248.png",
    time: "10분",
    likes: 31,
    category: "간식",
    difficulty: "easy",
    servings: 4,
    ingredients: ["팝콘 커널", "올리브오일", "로즈마리", "파마산 치즈", "소금"],
    instructions: ["팝콘을 튀겨주세요", "허브를 준비해주세요", "치즈를 갈아주세요", "모든 재료를 섞어주세요"]
  },
  {
    id: 39,
    title: "치즈 크래커",
    description: "바삭한 크래커와 다양한 치즈가 어우러진 우아한 간식입니다.",
    image: "/images/snack_4_20251119_123251.png",
    time: "20분",
    likes: 38,
    category: "간식",
    difficulty: "medium",
    servings: 6,
    ingredients: ["크래커", "브리 치즈", "체다 치즈", "포도", "견과류", "꿀"],
    instructions: ["치즈를 실온에 두세요", "크래커를 준비해주세요", "치즈를 올려주세요", "과일과 견과류로 장식하세요"]
  },
  {
    id: 40,
    title: "트레일 믹스",
    description: "견과류와 말린 과일이 들어간 영양 만점 간식입니다.",
    image: "/images/snack_5_20251119_123243.png",
    time: "5분",
    likes: 22,
    category: "간식",
    difficulty: "easy",
    servings: 8,
    ingredients: ["아몬드", "호두", "건포도", "말린 크랜베리", "다크 초콜릿"],
    instructions: ["견과류를 준비해주세요", "말린 과일을 넣어주세요", "초콜릿을 넣어주세요", "잘 섞어서 완성하세요"]
  }
];

export const getRecipesByCategory = (category: string): Recipe[] => {
  return recipeData.filter(recipe => recipe.category === category);
};

export const getPopularRecipes = (): Recipe[] => {
  return recipeData.sort((a, b) => b.likes - a.likes).slice(0, 12);
};

export const getSeasonalRecipes = (): Recipe[] => {
  // 계절별 레시피 로직 (현재는 한식과 일식 위주로)
  return recipeData.filter(recipe => 
    recipe.category === '한식' || recipe.category === '일식'
  ).slice(0, 12);
};