import { sandwichPng } from "~/common/images";

export const BLOG_ENTRIES = [
  {
    title: "Meet Your New Favorite Lunch",
    blurb: "Lunch, the abbreviation for luncheon, is a meal typically eaten at midday. During the 20th century, the meaning gradually narrowed to a small, or mid-sized meal eaten at midday.",
    content: "Lunch, the abbreviation for luncheon, is a meal typically eaten at midday. During the 20th century, the meaning gradually narrowed to a small, or mid-sized meal eaten at midday.",
    published: "January 1, 2018",
    imageUrl: sandwichPng,
  }
];

export type BlogEntryData = typeof BLOG_ENTRIES[0];
