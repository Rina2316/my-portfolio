import Link from 'next/link';


export default function LanguageSwitcher() {



  return (
    <div>
      {/* Ссылка для изменения на английский */}
      <Link href={"/en"} locale="en">
        EN
      </Link>

      {/* Ссылка для изменения на русский */}
      <Link href={"/ru"} locale="ru">
        RU
      </Link>
    </div>
  );
}
