import { MapPin } from "lucide-react"

const AccessSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">アクセス</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3292.257231909694!2d133.19606731523142!3d34.40732998051139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x355098bfb768baa7%3A0x8b62a82b14dea0e4!2z5bC-5bC-5biC!5e0!3m2!1sja!2sjp!4v1644913997025!5m2!1sja!2sjp"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">交通アクセス</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 mt-1 flex-shrink-0" />
                <div>
                  <strong>広島駅から：</strong> JR山陽本線で約1時間30分
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-2 mt-1 flex-shrink-0" />
                <div>
                  <strong>広島空港から：</strong> リムジンバスで約1時間45分
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-2 mt-1 flex-shrink-0" />
                <div>
                  <strong>今治駅から：</strong> JR予讃線で約40分
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AccessSection

