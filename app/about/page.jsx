import Location from "../components/Location"

const Page = () => {

  return (
    <div className="pt-28 bg-gray-100 flex flex-col items-center justify-center p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full">
        <h1 className="text-3xl font-bold mb-4">会社概要</h1>
        <h2 className="text-2xl font-semibold mb-2">九陽商事</h2>
        <h2 className="text-xl font-semibold mb-2">取締役: Steven</h2>
        <p className="text-gray-700 mt-4">
          九陽商事は、貿易会社です。我々の使命は、顧客のニーズに合わせたカスタマイズされたソリューションを提供することです。
          当社のチームは経験豊富で熱心なプロフェッショナルから構成されており、常に最新の技術トレンドに対応し、最高品質のサービスを提供しています。
        </p>


        <div className="flex flex-col items-center justify-center gap-8 mt-5">
        <div className="text-center">
          <h3 className="text-lg md:text-xl font-bold">九陽商事（株）</h3>
          <p className="text-gray-600 text-sm">TEL: 080-0000-0000</p>
          <p className="text-gray-60 text-sm0">Email: example@example.com</p>
          <p className="text-gray-600 text-sm">Address:京都府京都市右京区西院西貝川町 30-1</p>
        </div>
        <div className="w-full">
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d104580.19501908183!2d135.63236436429787!3d35.00342335875195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x600107a8182467e7%3A0x31ddfb32387e722e!2z44CSNjE1LTAwNTYg5Lqs6YO95bqc5Lqs6YO95biC5Y-z5Lqs5Yy66KW_6Zmi6KW_6LKd5bed55S677yT77yQ4oiS77yRIOWbm-adoeOCsOODqeODs-ODieODj-OCpOODhO-8oeajnw!5e0!3m2!1sja!2sjp!4v1713223575669!5m2!1sja!2sjp"
            width="100%"
            height="400"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg"
          ></iframe>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Page
