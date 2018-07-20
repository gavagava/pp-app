import { Injectable, Inject } from '@angular/core';
import { APP_CONFIG, IAppConfig } from '../config/app.config';
import * as lz from 'lz-string';
import { isString } from 'lodash';

/**
 * Сервис для управления значениями приложения, хранящихся в sessionStorage и localStorage браузера.
 * Хранит значения в storage в сжатом виде (lz-string). Для ключа используется префикс задаваемый в конфиге (storagePrefix)
 * Возвращает только значения хранящиеся с указанным в конфиге префиксом.
 * Для доступа к значениям методами класса ключи нужно указывать без префикса. Значения возвращаются в разжатом виде.
 */
@Injectable()
export class StorageService {
  private ls = {};
  private ss = {};

  constructor (@Inject(APP_CONFIG) private config: IAppConfig) {
    // инициализируем локальный кэш значений
    [this.ls, this.ss] = [localStorage, sessionStorage].map(s => {
      const res = {};

      for (let i = 0; i < s.length; i++) {
        const key = s.key(i);
        if (key.match(`^${this.config.storagePrefix}\.`) !== null) {
          res[key.replace(new RegExp(`^${this.config.storagePrefix}\.`), '')] = lz.decompressFromUTF16(s.getItem(key));
        }
      }

      return res;
    });
  }

  /**
   * Возвращает значение из sessionStorage по ключу
   *
   * @param {string} key ключ хранимого значения
   * @returns {string}
   * @memberof StorageService
   */
  getSessionValue(key: string): string | void {
    return this.ss[key];
  }

  /**
   * Возвращает значение из localStorage по ключу
   *
   * @param {string} key Ключ хранимого значения
   * @returns {string}
   * @memberof StorageService
   */
  getLocalValue(key: string): string | void {
    return this.ls[key];
  }

  /**
   * Устанавливает значение в sessionStorage
   *
   * @param {string} key Ключ
   * @param {string} value Значение
   * @memberof StorageService
   */
  setSessionValue(key: string, value: string) {
    this.ss[key] = value;
    sessionStorage.setItem(`${this.config.storagePrefix}.${key}`, lz.compressToUTF16(value));
  }

  /**
   * Устанавливает значение в localStorage
   *
   * @param {string} key Ключ
   * @param {*} value Значение
   * @memberof StorageService
   */
  setLocalValue(key: string, value: any) {
    this.ls[key] = value;
    localStorage.setItem(`${this.config.storagePrefix}.${key}`, lz.compressToUTF16(value));
  }

  /**
   * Удаляет значение из sessionStorage по ключу
   *
   * @param {string} key Ключ
   * @returns {boolean} true - если значение найдено и удалено, иначе false
   * @memberof StorageService
   */
  rmSessionValue(key: string): boolean {
    if (isString(this.ss[key])) {
      sessionStorage.removeItem(`${this.config.storagePrefix}.${key}`);
      this.ss[key] = undefined;
      return true;
    }

    return false;
  }

   /**
   * Удаляет значение из localstorage по ключу
   *
   * @param {string} key Ключ
   * @returns {boolean} true - если значение найдено и удалено, иначе false
   * @memberof StorageService
   */
  rmLocalValue(key: string): boolean {
    if (isString(this.ls[key])) {
      localStorage.removeItem(`${this.config.storagePrefix}.${key}`);
      this.ls[key] = undefined;
      return true;
    }

    return false;
  }

  /**
   * Очищает значения хранимые приложением в sessionStorage
   *
   * @returns {number} Количество удаленных значений
   * @memberof StorageService
   */
  clearSessionStorage(): number {
    let count = 0;

    Object.keys(this.ss).forEach(k => {
      if (this.rmSessionValue(k)) {
        count++;
      }
    });

    return count;
  }

  /**
   * Очищает значения хранимые приложением в localStorage
   *
   * @returns {number} Количество удаленных значений
   * @memberof StorageService
   */
  clearLocalStorage(): number {
    let count = 0;

    Object.keys(this.ls).forEach(k => {
      if (this.rmLocalValue(k)) {
        count++;
      }
    });

    return count;
  }
}
