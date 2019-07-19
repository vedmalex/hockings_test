import { LevelOfConcious } from "./types";

const map: LevelOfConcious[] = [
  // Восприятие Бога Восприятие жизни Уровень Оценка Эмоция Процесс
  { whoIsGod: "Я", lifeIs: "Она просто существует", level: "Просветление", mark: 700, emotion: "Невозможно выразить словами", process: "Чистое сознание" },
  { whoIsGod: "Всё сущее", lifeIs: "Совершенная", level: "Гармония", mark: 600, emotion: "Счастье", process: "Вдохновение" },
  { whoIsGod: "Единый", lifeIs: "Целостная", level: "Радость", mark: 540, emotion: "Покой", process: "Метаморфоза" },
  { whoIsGod: "Любящий", lifeIs: "Доброжелательная", level: "Любовь", mark: 500, emotion: "Уважение", process: "Откровение" },
  { whoIsGod: "Мудрый", lifeIs: "Многозначная", level: "Разум", mark: 400, emotion: "Понимание", process: "Обобщение" },
  { whoIsGod: "Милостивый", lifeIs: "Гармоничная", level: "Принятие", mark: 350, emotion: "Прощение", process: "Превосходство" },
  { whoIsGod: "Вдохновляющий", lifeIs: "Обнадёживающая", level: "Готовность", mark: 310, emotion: "Оптимизм", process: "Намерение" },
  { whoIsGod: "Дающий возможности", lifeIs: "Удовлетворительная", level: "Нейтралитет", mark: 250, emotion: "Доверие", process: "Освобождение" },
  { whoIsGod: "Позволяющий", lifeIs: "Подходящая", level: "Смелость", mark: 200, emotion: "Утверждение", process: "Полномочия" },
  { whoIsGod: "Безразличный", lifeIs: "Требующая", level: "Гордыня", mark: 175, emotion: "Пренебрежение", process: "Чванство" },
  { whoIsGod: "Мстительный", lifeIs: "Враждебная", level: "Гнев", mark: 150, emotion: "Ненависть", process: "Агрессия" },
  { whoIsGod: "Отрекающийся", lifeIs: "Неутешительная", level: "Желание", mark: 125, emotion: "Стремление", process: "Зависимость" },
  { whoIsGod: "Наказывающий", lifeIs: "Пугающая", level: "Страх", mark: 100, emotion: "Волнение", process: "Убегание" },
  { whoIsGod: "Высокомерный", lifeIs: "Трагическая", level: "Горе", mark: 75, emotion: "Сожаление", process: "Уныние" },
  { whoIsGod: "Осуждающий", lifeIs: "Безнадёжная", level: "Апатия", mark: 50, emotion: "Отчаяние", process: "Отречение" },
  { whoIsGod: "Карающий", lifeIs: "Злая", level: "Чувство вины", mark: 30, emotion: "Обвинение", process: "Разрушение" },
  { whoIsGod: "Презирающий", lifeIs: "Жалкая", level: "Позор", mark: 20, emotion: "Унижение", process: "Уничтожение" },
];

export function originalLevel(level: number) {
  for (let m of map) {
    if (m.mark <= level) {
      return m;
    }
  }
}


export function filter(level: number) {
  return originalLevel(level) || map[map.length - 1];
}

export default map;