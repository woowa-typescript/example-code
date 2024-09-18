const PromotionList = [
  { type: "product", name: "chicken" },
  { type: "product", name: "pizza" },
  { type: "card", name: "chee-up" },
];

type ElementOf<T extends readonly any[]> = T[number];

// type PromotionItemType = { type: string; name: string }
type PromotionItemType = ElementOf<typeof PromotionList>;
