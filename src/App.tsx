/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  Menu, 
  X, 
  ShoppingCart, 
  MessageCircle, 
  Truck, 
  Pill, 
  Stethoscope, 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  Zap, 
  Headphones, 
  Camera, 
  Upload, 
  ChevronLeft, 
  MapPin,
  CheckCircle2
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'الرئيسية', href: '#' },
    { name: 'خدماتنا', href: '#services' },
    { name: 'من نحن', href: '#about' },
    { name: 'اتصل بنا', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary-container rounded-xl flex items-center justify-center text-white">
            <Pill size={24} />
          </div>
          <span className="text-2xl font-bold text-primary-container">صيدلية د. طارق</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-gray-600 hover:text-primary-container font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a 
            href="https://wa.me/2011100018997" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-primary-container text-white px-6 py-2.5 rounded-full font-bold flex items-center gap-2 hover:bg-primary transition-all active:scale-95 shadow-md shadow-primary-container/20"
          >
            <Phone size={18} />
            <span>اتصل الآن</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-primary-container p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="p-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg text-gray-700 font-medium hover:text-primary-container"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="https://wa.me/2011100018997" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary-container text-white w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2"
              >
                <Phone size={20} />
                <span>اتصل الآن</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden lg:pt-48 lg:pb-32 bg-[radial-gradient(circle_at_70%_30%,rgba(39,174,96,0.08)_0%,rgba(244,251,241,1)_100%)]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-container/10 text-primary font-bold text-sm">
            <ShieldCheck size={18} className="text-primary-container" />
            <span>خدمة طبية موثوقة على مدار الساعة</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
            صحتك أولويتنا في <br/>
            <span className="text-primary-container">صيدلية د. طارق</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-xl leading-relaxed">
            خدمة سريعة وتوافر دائم للأدوية لضمان راحتك وسلامتك. نحن نجمع بين الدقة المهنية والرعاية الإنسانية.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="https://wa.me/2011100018997" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-primary-container text-white px-10 py-4 rounded-2xl font-bold text-lg hover:shadow-xl hover:-translate-y-1 transition-all active:scale-95 flex items-center justify-center gap-2"
            >
              <ShoppingCart size={20} />
              <span>اطلب الآن</span>
            </a>
            <a 
              href="https://wa.me/2011100018997" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-secondary border-2 border-secondary/20 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-secondary/5 transition-all active:scale-95 flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} />
              <span>تواصل معنا</span>
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -z-10 inset-0 bg-primary-container/20 blur-3xl rounded-full scale-110 animate-pulse"></div>
          <div className="rounded-[40px] overflow-hidden shadow-2xl relative border-8 border-white">
            <img 
              src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=2070&auto=format&fit=crop" 
              alt="صيدلية د. طارق من الداخل" 
              className="w-full h-full object-cover aspect-[4/5]"
            />
          </div>
          
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.5, type: 'spring' }}
            viewport={{ once: true }}
            className="absolute -bottom-6 -right-6 lg:-right-12 bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-2xl border border-white/50 hidden md:block"
          >
            <div className="flex items-center gap-4">
              <div className="p-4 bg-primary-container/10 rounded-2xl text-primary-container">
                <Truck size={32} />
              </div>
              <div>
                <p className="font-bold text-gray-900 text-lg">توصيل سريع</p>
                <p className="text-gray-500 font-medium tracking-wide">خلال 30 دقيقة</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: 'صرف الأدوية',
      desc: 'توفير جميع أنواع الأدوية والوصفات الطبية مع التأكد من تاريخ الصلاحية ومصدر الدواء.',
      icon: Pill
    },
    {
      title: 'استشارات دوائية',
      desc: 'نخبة من الصيادلة المتخصصين للإجابة على جميع استفساراتكم حول الجرعات والتفاعلات الدوائية.',
      icon: Stethoscope
    },
    {
      title: 'توصيل سريع',
      desc: 'خدمة توصيل للمنازل على مدار الساعة لضمان وصول الدواء إليكم في أسرع وقت ممكن.',
      icon: Truck
    },
    {
      title: 'منتجات العناية',
      desc: 'تشكيلة واسعة من مستحضرات التجميل ومنتجات العناية الشخصية من أفضل الماركات العالمية.',
      icon: Sparkles
    }
  ];

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-gray-900">خدماتنا المتميزة</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">نقدم مجموعة متكاملة من الخدمات الصحية المصممة لتلبية احتياجاتك واحتياجات عائلتك بكل دقة وعناية</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group p-8 rounded-[32px] bg-surface-container-low hover:bg-white hover:shadow-2xl hover:shadow-primary-container/10 transition-all duration-500 border border-transparent hover:border-primary-container/20 cursor-default"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary-container mb-8 group-hover:bg-primary-container group-hover:text-white transition-all shadow-sm">
                <service.icon size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed font-medium">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  const points = [
    { title: 'دقة في الخدمة', desc: 'فحص دقيق للوصفات الطبية لضمان سلامتك.', icon: CheckCircle2 },
    { title: 'سرعة التوصيل', desc: 'أسطول متخصص لضمان وصول طلبك بأمان وسرعة.', icon: Zap },
    { title: 'دعم 24 ساعة', desc: 'فريقنا متواجد دائماً لخدمتكم في أي وقت.', icon: Headphones },
  ];

  return (
    <section id="about" className="py-24 bg-surface-container-low overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative order-2 lg:order-1"
        >
          <div className="rounded-[48px] overflow-hidden shadow-2xl relative z-10 border-8 border-white">
            <img 
              src="https://images.unsplash.com/photo-1626341332323-a4903c103890?q=80&w=2030&auto=format&fit=crop" 
              alt="صيدلية د. طارق من الداخل - رصانة وخبرة" 
              className="w-full h-full object-cover aspect-video lg:aspect-square"
            />
          </div>
          <div className="absolute -inset-4 border-2 border-primary-container/20 rounded-[56px] -z-0"></div>
        </motion.div>

        <div className="space-y-10 order-1 lg:order-2">
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight tracking-tight">لماذا صيدلية د. طارق؟</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              نفخر في صيدلية د. طارق بتقديم خدماتنا الصحية لأكثر من ١٠ سنوات من الخبرة. نحن لا نبيع الأدوية فحسب، بل نسعى لنكون الشريك الصحي الموثوق لكل أسرة، من خلال الدقة المتناهية والاهتمام بأدق التفاصيل.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {points.map((point, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="flex items-start gap-6 p-6 rounded-3xl bg-white border border-white hover:border-primary-container/30 transition-all shadow-sm group"
              >
                <div className="bg-primary-container/10 p-3 rounded-2xl text-primary-container group-hover:bg-primary-container group-hover:text-white transition-all">
                  <point.icon size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-1">{point.title}</h4>
                  <p className="text-gray-500 font-medium">{point.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const PrescriptionSection = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setIsConfirmed(true);
      
      // Delay for confirmation message before redirecting
      setTimeout(() => {
        const message = encodeURIComponent('مرحبا، أريد طلب دواء من الصيدلية. تم رفع روشتة مرفقة.');
        window.open(`https://wa.me/2011100018997?text=${message}`, '_blank');
        setIsConfirmed(false);
      }, 2000);
    }
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-secondary rounded-[3rem] p-12 text-white relative overflow-hidden">
          {/* Grid Background Effect */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-5xl font-bold leading-tight">ارفع وصفتك الطبية الآن</h2>
              <p className="text-white/80 text-xl font-medium max-w-lg leading-relaxed">
                لا داعي للانتظار، قم بتصوير الروشتة وسنقوم بتحضيرها وتوصيلها لك مباشرة. نوفر لك الجهد والوقت مع أعلى معايير الخصوصية.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div 
                  onClick={handleUploadClick}
                  className="flex items-center gap-3 bg-white/10 px-6 py-3 rounded-full border border-white/20 backdrop-blur-md cursor-pointer hover:bg-white/20 transition-all"
                >
                  <Camera size={24} className="text-primary-container" />
                  <span className="font-bold">صوّر الوصفة</span>
                </div>
                <div 
                  onClick={handleUploadClick}
                  className="flex items-center gap-3 bg-white/10 px-6 py-3 rounded-full border border-white/20 backdrop-blur-md cursor-pointer hover:bg-white/20 transition-all"
                >
                  <Upload size={24} className="text-primary-container" />
                  <span className="font-bold">ارفع الملف</span>
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleFileChange} 
                className="hidden" 
                accept="image/*,.pdf"
              />
              <motion.div 
                onClick={handleUploadClick}
                whileHover={{ scale: 1.02 }}
                className="w-full max-w-md p-12 border-4 border-dashed border-white/20 rounded-[40px] bg-white/5 flex flex-col items-center justify-center gap-6 hover:bg-white/10 transition-all cursor-pointer group relative"
              >
                <AnimatePresence>
                  {isConfirmed ? (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="absolute inset-0 bg-primary-container rounded-[36px] flex flex-col items-center justify-center z-20 text-center p-6"
                    >
                      <CheckCircle2 size={64} className="mb-4" />
                      <p className="text-2xl font-bold">تم اختيار الملف بنجاح!</p>
                      <p className="font-medium opacity-90">جاري توجيهك إلى واتساب...</p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>

                <div className="w-24 h-24 bg-primary-container rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform shadow-primary-container/40">
                  <Camera size={48} className="text-white" />
                </div>
                <div className="text-center">
                  <span className="text-2xl font-bold block mb-2">اضغط هنا لرفع الروشتة</span>
                  <span className="text-white/60 font-medium">يدعم صيغ JPG, PNG, PDF</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-surface-container overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">نحن هنا لخدمتك في أي وقت</h2>
              <p className="text-xl text-gray-500 font-medium leading-relaxed">
                يمكنك التواصل معنا عبر الهاتف أو واتساب، أو تفضل بزيارتنا في مقرنا. نحن نسعد بخدمتكم وتلبية كافة احتياجاتكم الطبية.
              </p>
            </div>

            <div className="space-y-4">
              <a 
                href="https://wa.me/2011100018997" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between p-8 bg-white rounded-[32px] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all border border-gray-100 group"
              >
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-primary-container/10 text-primary-container rounded-[20px] flex items-center justify-center transition-all group-hover:bg-primary-container group-hover:text-white">
                    <Phone size={32} />
                  </div>
                  <div>
                    <p className="text-gray-400 font-bold text-sm uppercase tracking-widest mb-1">اتصل بنا</p>
                    <p className="font-bold text-2xl text-gray-900">+20 111 000 18997</p>
                  </div>
                </div>
                <ChevronLeft size={32} className="text-gray-300 group-hover:text-primary-container transition-colors" />
              </a>

              <a 
                href="https://wa.me/2011100018997" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between p-8 bg-white rounded-[32px] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all border border-gray-100 group"
              >
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-[#25D366]/10 text-[#128C7E] rounded-[20px] flex items-center justify-center transition-all group-hover:bg-[#25D366] group-hover:text-white">
                    <MessageCircle size={32} />
                  </div>
                  <div>
                    <p className="text-gray-400 font-bold text-sm uppercase tracking-widest mb-1">واتساب</p>
                    <p className="font-bold text-2xl text-gray-900">راسلنا مباشرة</p>
                  </div>
                </div>
                <ChevronLeft size={32} className="text-gray-300 group-hover:text-primary-container transition-colors" />
              </a>
            </div>

            <motion.div 
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ repeat: Infinity, duration: 2.5 }}
              className="p-8 bg-primary-container rounded-[32px] text-white text-center shadow-2xl shadow-primary-container/30"
            >
              <p className="text-2xl font-bold">متاحون ٢٤ ساعة طوال الأسبوع</p>
            </motion.div>
          </div>

          <div className="lg:col-span-7 h-[500px] lg:h-full min-h-[500px] rounded-[48px] overflow-hidden shadow-2xl relative border-8 border-white group">
            {/* Map Placeholder with Image */}
            <img 
              src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2066&auto=format&fit=crop" 
              alt="Location" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/10"></div>
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="relative"
              >
                <div className="w-16 h-16 bg-primary-container rounded-full flex items-center justify-center text-white shadow-2xl border-4 border-white">
                  <MapPin size={32} />
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-primary-container rotate-45 -z-10"></div>
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-24 h-4 bg-black/20 blur-md rounded-full scale-50"></div>
              </motion.div>
            </div>

            {/* Map Floating Info */}
            <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-[32px] shadow-2xl border border-white/50">
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary-container/10 rounded-2xl flex items-center justify-center text-primary-container">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900 italic">مقرنا في المنصورة</h5>
                    <p className="text-gray-500 font-medium">شارع سامية الجمل، بجوار برج عصفور</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-right">
          <div className="space-y-4">
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <div className="w-12 h-12 bg-primary-container rounded-2xl flex items-center justify-center text-white">
                <Pill size={24} />
              </div>
              <span className="text-3xl font-bold text-primary-container">صيدلية د. طارق</span>
            </div>
            <p className="text-gray-500 max-w-sm font-medium leading-relaxed">
              تقديم الرعاية الصحية المتميزة لمجتمعنا بكل فخر واعتزاز منذ عام ٢٠١٠.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {['سياسة الخصوصية', 'الشروط والأحكام', 'الأسئلة الشائعة'].map((item) => (
              <a key={item} href="#" className="text-gray-500 hover:text-primary-container transition-colors font-bold">{item}</a>
            ))}
          </div>

          <div className="text-gray-400 font-medium">
            <p>© ٢٠٢٤ صيدلية د. طارق. جميع الحقوق محفوظة</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FloatingWhatsApp = () => {
  return (
    <motion.a
      href="https://wa.me/2011100018997"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:bg-[#128C7E] transition-colors"
    >
      <MessageCircle size={32} />
      <span className="absolute -top-2 -left-2 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-white"></span>
      </span>
    </motion.a>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen font-sans antialiased text-right relative" dir="rtl">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <PrescriptionSection />
        <Contact />
      </main>
      <FloatingWhatsApp />
      <Footer />
    </div>
  );
}
