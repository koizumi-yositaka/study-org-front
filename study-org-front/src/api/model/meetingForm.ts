/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * PRODUCT API DOC
 * PRODUCT API DOC
 * OpenAPI spec version: 0.0.1
 */

/**
 * ミーティング登録用
 */
export interface MeetingForm {
  /** 詳細情報 */
  detail?: string;
  /** 会議時間 */
  duration_minutes?: number;
  /** 開催日時 */
  eventDate: string;
  /** 開催者ID */
  openerId: number;
  /** メーティング名 */
  title?: string;
}
