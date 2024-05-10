import { BibleVerse } from "./Verse"

export type ChapterItem = {
    bookName: string
    chapter: number
    verses: BibleVerse[]
}