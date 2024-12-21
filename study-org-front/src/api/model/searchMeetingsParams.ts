/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * PRODUCT API DOC
 * PRODUCT API DOC
 * OpenAPI spec version: 0.0.1
 */
import type { MeetingSearchForm } from "./meetingSearchForm";
import type { Pagination } from "./pagination";
import type { OrderProp } from "./orderProp";

export type SearchMeetingsParams = {
  /**
   * 検索パラむ
   */
  searchForm?: MeetingSearchForm;
  /**
   * ページネーション
   */
  pagination?: Pagination;
  /**
   * Order
   */
  orderProp?: OrderProp;
};