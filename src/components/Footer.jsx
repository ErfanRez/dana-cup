import contact from "../../public/contact.png";
import call from "../../public/call.png";
import location from "../../public/location.png";
import frame from "../../public/Frame-e.png";
import socialMediaFrame from "../../public/social-media.png";

const Footer = () => {
  return (
    <div className="w-full h-[15%] mt-5">
      <div className="flex">
        {/*  */}
        <div className="w-[30%]">
          <div className="flex gap-2 items-center pt-3 pb-5">
            <img src="../public/logo.png" alt="" className="size-10" />
            <div>
              <h2 className="font-extrabold">کتابخونه</h2>
              <p className="text-[#64748B] text-xs">فروشگاه آنلاین کتاب</p>
            </div>
          </div>
          <p className="text-xs text-[#475569] pt-4">
            اگه شما هم از علاقه‌مندان پروپاقرص کتاب و کتابخوانی هستید و لذت
            خواندن کتاب را با هیچ چیزی عوض نمی‌کنید، کتابخونه برای شماست!
            کتابخونه با داشتن بیش از ۱۴۰ هزار عنوان کتاب مختلف از پلتفرم‌های
            خرید اینترنتی کتاب محسوب می شود که امکان این‌که کتاب مورد نظرتان چه
            در حوزه‌های عمومی و چه در حوزه‌های رمان‌های خارجی و کمک‌درسی در آن
            یافت نشود بسیار بسیار اندک است.{" "}
          </p>
          <img src={socialMediaFrame} alt="" className="pt-16" />
        </div>
        <div className="p-5 flex gap-7">
          <div>
            <h3 className="font-bold text-sm"> راهنمای خرید </h3>
            <ul className="p-5">
              <li>
                <a href="" className="Footer-link">
                  درباره ی ما
                </a>
              </li>
              <li>
                <a href="" className="Footer-link">
                  تماس با ما
                </a>
              </li>
              <li>
                <a href="" className="Footer-link">
                  فروشگاه
                </a>
              </li>
              <li>
                <a href="" className="Footer-link">
                  تخفیفات ویژه
                </a>
              </li>
              <li>
                <a href="" className="Footer-link">
                  مجله ی خبری
                </a>
              </li>
              <li>
                <a href="" className="Footer-link">
                  نویسندگان
                </a>
              </li>
              <li>
                <a href="" className="Footer-link">
                  ناشران
                </a>
              </li>
            </ul>
          </div>
          {/* third column */}
          <div className="flex">
            <div>
              <h3 className="font-bold text-sm">نقشه ی کتابخونه</h3>
              <ul className="p-5">
                <li>
                  <a href="" className="Footer-link">
                    درباره ی ما
                  </a>
                </li>
                <li>
                  <a href="" className="Footer-link">
                    تماس با ما
                  </a>
                </li>
                <li>
                  <a href="" className="Footer-link">
                    فروشگاه
                  </a>
                </li>
                <li>
                  <a href="" className="Footer-link">
                    تخفیفات ویژه
                  </a>
                </li>
                <li>
                  <a href="" className="Footer-link">
                    مجله ی خبری
                  </a>
                </li>
                <li>
                  <a href="" className="Footer-link">
                    نویسندگان
                  </a>
                </li>
                <li>
                  <a href="" className="Footer-link">
                    ناشران
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* fourth column */}
          <div>
            <div>
              <h3 className="font-bold text-sm">خدمات مشتریان</h3>
              <ul className="p-5">
                <li>
                  <a href="" className="Footer-link">
                    درباره ی ما
                  </a>
                </li>
                <li>
                  <a href="" className="Footer-link">
                    تماس با ما
                  </a>
                </li>
                <li>
                  <a href="" className="Footer-link">
                    فروشگاه
                  </a>
                </li>
                <li>
                  <a href="" className="Footer-link">
                    تخفیفات ویژه
                  </a>
                </li>
                <li>
                  <a href="" className="Footer-link">
                    مجله ی خبری
                  </a>
                </li>
                <li>
                  <a href="" className="Footer-link">
                    نویسندگان
                  </a>
                </li>
                <li>
                  <a href="" className="Footer-link">
                    ناشران
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* fifth column */}
          <div>
            <div>
              <h3 className="font-bold text-sm">نقشه ی ما </h3>
              <ul>
                <li className="flex w-[45%] items-start gap-2 pt-5">
                  <img src={location} alt="" />
                  <p className="Footer-link">
                    اصفهان، خیابان فردوسی، فرعی سوم، کوچه بهارستان، ساختمان
                    آبشار، واحد ۴
                  </p>
                </li>
                <li className="flex gap-2 pt-5">
                  <img src={call} alt="" />
                  <p className="Footer-link">۰۳۱-۳۲۲۲۹۳۹۳</p>
                </li>
                <li className="flex gap-2 pt-5">
                  <img src={contact} alt="" />
                  <p className="Footer-link">info@ketabkhoone.com</p>
                </li>
              </ul>
              <img src={frame} alt="" className="pt-7" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
