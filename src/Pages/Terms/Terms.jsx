import React from "react";
import { Link } from "react-router";

export default function Terms() {
  const sections = [
    {
      number: "1",
      title: "الموافقة على الشروط",
      content:
        "بالوصول أو استخدام عدسة، فإنك توافق على الالتزام بشروط الخدمة هذه وجميع القوانين واللوائح المعمول بها. إذا لم توافق على أي من هذه الشروط، فأنت ممنوع من استخدام هذا الموقع أو الوصول إليه.",
    },
    {
      number: "2",
      title: "رخصة الاستخدام",
      content:
        "يُمنح الإذن للوصول المؤقت إلى المواد على موقع عدسة للعرض الشخصي غير التجاري فقط. هذا منح ترخيص وليس نقل ملكية.",
      listTitle: "بموجب هذا الترخيص لا يجوز لك:",
      items: [
        "تعديل أو نسخ المواد",
        "استخدام المواد لأي غرض تجاري أو للعرض العام",
        "محاولة فك أو عكس هندسة أي برنامج على الموقع",
        "إزالة أي حقوق نشر أو علامات ملكية من المواد",
        "نقل المواد إلى شخص آخر أو نسخها على أي خادم آخر",
      ],
    },
    {
      number: "3",
      title: "إخلاء المسؤولية",
      content:
        'المواد الموجودة على موقع عدسة مقدمة على أساس "كما هي". عدسة لا يقدم أي ضمانات، صريحة أو ضمنية، ويخلي مسؤوليته من جميع الضمانات الأخرى.',
    },
    {
      number: "4",
      title: "القيود",
      content:
        "في أي حال من الأحوال، لن يكون عدسة أو مورديه مسؤولين عن أي أضرار ناتجة عن استخدام أو عدم القدرة على استخدام المواد على الموقع.",
    },
    {
      number: "5",
      title: "محتوى المستخدم",
      content:
        "إذا نشرت محتوى على موقعنا (مثل التعليقات)، فإنك تمنحنا ترخيصاً غير حصري وعالمي ومجاني لاستخدام هذا المحتوى وإعادة إنتاجه وتعديله وتوزيعه.",
      listTitle: "يجب ألا يكون محتواك:",
      items: [
        "أن يكون تشهيرياً أو فاحشاً أو مسيئاً",
        "انتهاك حقوق الملكية الفكرية للآخرين",
        "احتواء فيروسات أو أكواد ضارة",
        "انتهاك أي قوانين أو لوائح معمول بها",
        "الإعلان عن منتجات أو خدمات غير مصرح بها",
      ],
    },
    {
      number: "6",
      title: "التعديلات",
      content:
        "قد يراجع عدسة شروط الخدمة هذه في أي وقت دون إشعار. باستخدام هذا الموقع، فإنك توافق على الالتزام بالنسخة الحالية من شروط الخدمة.",
    },
  ];

  return (
    <main className="flex-grow" dir="rtl">
      <div className="bg-[#0a0a0a]">
        {/* Header */}
        <header className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[#0a0a0a]" />

          <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-[size:60px_60px]" />

          <div className="absolute inset-0 opacity-30">
            <div className="absolute bottom-20 left-20 w-72 h-72 bg-yellow-500/20 rounded-full blur-[100px]" />
          </div>

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <nav className="flex items-center justify-center gap-2 text-sm mb-8">
              <Link
                to="/"
                className="text-neutral-400 hover:text-white transition-colors"
              >
                الرئيسية
              </Link>

              <i className="fa-solid fa-chevron-left text-neutral-600 text-xs" />

              <span className="text-orange-500 font-medium">
                شروط الخدمة
              </span>
            </nav>

            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500/10 backdrop-blur-sm rounded-2xl border border-orange-500/30 mb-6">
              <i className="fa-regular fa-file-lines text-2xl text-orange-500" />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              شروط الخدمة
            </h1>

            <p className="text-neutral-400 text-lg">
              آخر تحديث: 15 يناير 2026
            </p>
          </div>
        </header>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Important Notice */}
          <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-2xl p-6 mb-12">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <i className="fa-solid fa-triangle-exclamation text-xl text-yellow-500" />
              </div>

              <div>
                <h3 className="font-semibold text-yellow-500 mb-1">
                  إشعار مهم
                </h3>

                <p className="text-yellow-300/80 text-sm">
                  يرجى قراءة شروط الخدمة هذه بعناية قبل استخدام موقعنا.
                  بالوصول أو استخدام عدسة، فإنك توافق على الالتزام بهذه
                  الشروط.
                </p>
              </div>
            </div>
          </div>

          {/* Sections */}
          <div className="space-y-12">
            {sections.map((section) => (
              <section key={section.number} className="group">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-orange-500 to-yellow-500 text-white text-sm font-bold rounded-lg">
                    {section.number}
                  </span>

                  {section.title}
                </h2>

                <div className="pr-11">
                  <p className="text-neutral-400 leading-relaxed mb-4">
                    {section.content}
                  </p>

                  {section.listTitle && (
                    <p className="text-neutral-300 font-medium mb-3">
                      {section.listTitle}
                    </p>
                  )}

                  {section.items && (
                    <ul className="space-y-2">
                      {section.items.map((item, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 text-neutral-400"
                        >
                          <i className="fa-solid fa-xmark text-red-400 flex-shrink-0 mt-1" />

                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </section>
            ))}

            {/* Contact */}
            <section className="group">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-orange-500 to-yellow-500 text-white text-sm font-bold rounded-lg">
                  7
                </span>

                معلومات الاتصال
              </h2>

              <div className="pr-11">
                <p className="text-neutral-400 leading-relaxed mb-4">
                  إذا كان لديك أي أسئلة حول شروط الخدمة هذه، يرجى التواصل
                  معنا:
                </p>

                <a
                  href="mailto:hello@adasah.com"
                  className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 font-medium transition-colors"
                >
                  <i className="fa-solid fa-envelope" />
                  hello@adasah.com
                </a>
              </div>
            </section>
          </div>

          {/* Footer Note */}
          <div className="mt-16 pt-8 border-t border-[#262626]">
            <p className="text-neutral-500 text-sm text-center">
              باستخدام موقعنا، فإنك توافق على شروط الخدمة هذه. انظر أيضاً
              <Link
                to="/privacy"
                className="text-orange-500 hover:text-orange-400 font-medium"
              >
                سياسة الخصوصية
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}