import { Author } from './author'

export type Review = [string, number, string]

export enum Genre {
  Fantasy = 1,
  Adventure,
  Horror,
  Programming
}

export type BookAuthor = Pick<Author, 'firstName' | 'lastName'>
