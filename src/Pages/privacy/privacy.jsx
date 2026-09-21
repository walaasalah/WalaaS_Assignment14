import React from "react";
import { Link } from "react-router";

export default function Privacy() {
  const sections = [
    {
      number: "1",
      title: "مقدمة",
      content:
        "مرحباً بك في عدسة. نحن نحترم خصوصيتك وملتزمون بحماية بياناتك الشخصية. ستعلمك سياسة الخصوصية هذه بكيفية العناية ببياناتك الشخصية عند زيارة موقعنا وتخبرك عن حقوق الخصوصية الخاصة بك.",
    },
    {
      number: "2",
      title: "المعلومات التي نجمعها",
      items: [
        ["بيانات الهوية:", "تشمل الاسم الأول، الاسم الأخير، اسم المستخدم أو معرف مشابه."],
        ["بيانات الاتصال:", "تشمل عنوان البريد الإلكتروني."],
        ["البيانات التقنية:", "تشمل عنوان IP، نوع المتصفح، المنطقة الزمنية، ونظام التشغيل."],
        ["بيانات الاستخدام:", "تشمل معلومات حول كيفية استخدامك لموقعنا وخدماتنا."],
      ],
    },
    {
      number: "3",
      title: "كيف نستخدم معلوماتك",
      items: [
        [null, "لتقديم خدمتنا والحفاظ عليها"],
        [null, "لإخطارك بالتغييرات في خدمتنا"],
        [null, "لتقديم دعم العملاء"],
        [null, "لجمع تحليلات أو معلومات قيمة لتحسين خدمتنا"],
        [null, "لمراقبة استخدام خدمتنا"],
        [null, "لاكتشاف ومنع ومعالجة المشاكل التقنية"],
      ],
    },
    {
      number: "4",
      title: "ملفات تعريف الارتباط",
      content:
        "نستخدم ملفات تعريف الارتباط وتقنيات التتبع المشابهة لتتبع النشاط على موقعنا. يمكنك توجيه متصفحك لرفض جميع ملفات تعريف الارتباط أو للإشارة عند إرسال ملف تعريف ارتباط. ومع ذلك، إذا لم تقبل ملفات تعريف الارتباط، فقد لا تتمكن من استخدام بعض أجزاء موقعنا.",
    },
    {
      number: "5",
      title: "أمان البيانات",
      content:
        "لقد وضعنا تدابير أمنية مناسبة لمنع فقدان بياناتك الشخصية أو استخدامها أو الوصول إليها بشكل غير مصرح به عن طريق الخطأ. نحن نحد الوصول إلى بياناتك الشخصية لأولئك الذين لديهم حاجة عملية للمعرفة.",
    },
    {
      number: "6",
      title: "حقوقك",
      items: [
        [null, "طلب الوصول إلى بياناتك الشخصية"],
        [null, "طلب تصحيح بياناتك الشخصية"],
        [null, "طلب مسح بياناتك الشخصية"],
        [null, "الاعتراض على معالجة بياناتك الشخصية"],
        [null, "طلب تقييد معالجة بياناتك الشخصية"],
        [null, "الحق في سحب الموافقة"],
      ],
    },
  ];

  return (
    <main className="flex-grow " dir="rtl">
      <div className="bg-[#0a0a0a]">
        {/* Header */}
        <header className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[#0a0a0a]" />

          <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-[size:60px_60px]" />

          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 right-20 w-72 h-72 bg-orange-500/20 rounded-full blur-[100px]" />
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
                سياسة الخصوصية
              </span>
            </nav>

            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500/10 backdrop-blur-sm rounded-2xl border border-orange-500/30 mb-6">
              <i className="fa-solid fa-lock text-2xl text-orange-500" />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              سياسة الخصوصية
            </h1>

            <p className="text-neutral-400 text-lg">
              آخر تحديث: 15 يناير 2026
            </p>
          </div>
        </header>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Privacy Notice */}
          <div className="bg-orange-500/10 border border-orange-500/20 rounded-2xl p-6 mb-12">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <i className="fa-solid fa-shield-halved text-xl text-orange-500" />
              </div>

              <div>
                <h3 className="font-semibold text-orange-500 mb-1">
                  خصوصيتك تهمنا
                </h3>

                <p className="text-orange-300/80 text-sm">
                  نحن ملتزمون بحماية معلوماتك الشخصية والشفافية بشأن ما نجمعه.
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
                  {section.content && (
                    <p className="text-neutral-400 leading-relaxed">
                      {section.content}
                    </p>
                  )}

                  {section.items && (
                    <ul className="space-y-3">
                      {section.items.map(([label, text], index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 text-neutral-400"
                        >
                          <i className="fa-solid fa-circle-check text-orange-500 flex-shrink-0 mt-1" />

                          <span>
                            {label && (
                              <strong className="text-white">
                                {label}
                              </strong>
                            )}
                            {text}
                          </span>
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

                تواصل معنا
              </h2>

              <div className="pr-11">
                <p className="text-neutral-400 leading-relaxed mb-4">
                  إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى التواصل
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
              باستخدام موقعنا، فإنك توافق على سياسة الخصوصية هذه. انظر أيضاً
              <Link
                to="/terms"
                className="text-orange-500 hover:text-orange-400 font-medium transition-colors"
              >
                شروط الخدمة
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}