import Link from "next/link"

const announcements = [
  { id: 1, title: "夏季限定サイクリングツアー開催のお知らせ", link: "/news/1" },
  { id: 2, title: "レストランメニューリニューアルのお知らせ", link: "/news/2" },
  { id: 3, title: "新型コロナウイルス感染症対策について", link: "/news/3" },
]

const InfoSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">お知らせ</h2>
        <ul className="space-y-4">
          {announcements.map((announcement) => (
            <li key={announcement.id} className="bg-white p-4 rounded-lg shadow">
              <Link href={announcement.link} className="text-blue-600 hover:underline">
                {announcement.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default InfoSection

