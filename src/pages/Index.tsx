import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const features = [
  {
    icon: 'Zap',
    title: 'Молниеносная скорость',
    description: 'Обрабатывайте данные в 10 раз быстрее благодаря современным технологиям'
  },
  {
    icon: 'Shield',
    title: 'Безопасность данных',
    description: 'Шифрование на уровне банков и полное соответствие стандартам безопасности'
  },
  {
    icon: 'Users',
    title: 'Командная работа',
    description: 'Совместный доступ и синхронизация для эффективной работы команды'
  },
  {
    icon: 'BarChart',
    title: 'Аналитика в реальном времени',
    description: 'Получайте инсайты мгновенно с интерактивными графиками и отчётами'
  }
];

const testimonials = [
  {
    name: 'Александра Ковалёва',
    role: 'CEO, TechStart',
    avatar: 'AK',
    text: 'Этот продукт полностью изменил подход нашей команды к работе. Производительность выросла на 40% за первый месяц!',
    rating: 5
  },
  {
    name: 'Дмитрий Соколов',
    role: 'Менеджер проектов, Digital Pro',
    avatar: 'ДС',
    text: 'Интуитивный интерфейс и мощный функционал. Внедрили за неделю, результат превзошёл ожидания.',
    rating: 5
  },
  {
    name: 'Елена Морозова',
    role: 'Дизайнер, Creative Lab',
    avatar: 'ЕМ',
    text: 'Наконец-то решение, которое действительно понимает нужды пользователей. Рекомендую всем!',
    rating: 5
  }
];

const plans = [
  {
    name: 'Стартовый',
    price: '0',
    period: 'навсегда',
    features: ['До 5 проектов', 'Базовая аналитика', 'Email поддержка', '1 GB хранилище'],
    highlighted: false
  },
  {
    name: 'Профессиональный',
    price: '1990',
    period: 'в месяц',
    features: ['Неограниченно проектов', 'Расширенная аналитика', 'Приоритетная поддержка', '100 GB хранилище', 'API доступ'],
    highlighted: true
  },
  {
    name: 'Корпоративный',
    price: '4990',
    period: 'в месяц',
    features: ['Всё из Pro', 'Персональный менеджер', 'SLA 99.9%', 'Неограниченное хранилище', 'Кастомизация', 'Обучение команды'],
    highlighted: false
  }
];

export default function Index() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-lg shadow-sm z-50 border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Sparkles" size={24} className="text-primary-foreground" />
            </div>
            <h1 className="text-2xl font-bold text-foreground">NexusFlow</h1>
          </div>
          
          <div className="hidden md:flex gap-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground/70 hover:text-primary transition-colors"
            >
              О продукте
            </button>
            <button 
              onClick={() => scrollToSection('features')}
              className="text-foreground/70 hover:text-primary transition-colors"
            >
              Возможности
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-foreground/70 hover:text-primary transition-colors"
            >
              Отзывы
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-foreground/70 hover:text-primary transition-colors"
            >
              Тарифы
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground/70 hover:text-primary transition-colors"
            >
              Контакты
            </button>
          </div>

          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            Начать бесплатно
          </Button>
        </div>
      </nav>

      <section id="hero" className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-primary/10 text-primary hover:bg-primary/20">
            Новое поколение продуктивности
          </Badge>
          <h2 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Управляйте проектами<br />с <span className="text-primary">умом</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            NexusFlow — это платформа для команд, которые ценят своё время. Автоматизация рутины, 
            прозрачная аналитика и совместная работа в одном месте.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8"
              onClick={() => scrollToSection('pricing')}
            >
              Попробовать бесплатно
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary/10 text-lg px-8"
              onClick={() => scrollToSection('about')}
            >
              Узнать больше
            </Button>
          </div>
          
          <div className="mt-16 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-card/80 backdrop-blur rounded-2xl shadow-2xl p-8 border">
              <div className="grid grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">150K+</div>
                  <div className="text-muted-foreground">Активных пользователей</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">4.9/5</div>
                  <div className="text-muted-foreground">Рейтинг на G2</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
                  <div className="text-muted-foreground">Uptime SLA</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary">О продукте</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Решение для современных команд
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                NexusFlow объединяет управление задачами, коммуникацию и аналитику в единой экосистеме. 
                Мы создали инструмент, который помогает командам фокусироваться на важном и достигать целей быстрее.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                От стартапов до крупных корпораций — более 150 тысяч пользователей доверяют нам управление 
                своими проектами каждый день.
              </p>
              <Button 
                size="lg"
                onClick={() => scrollToSection('features')}
              >
                Изучить возможности
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl blur-2xl"></div>
              <Card className="relative bg-card/80 backdrop-blur">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon name="Target" size={24} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Фокус на результат</h3>
                        <p className="text-sm text-muted-foreground">Минус бюрократия, плюс достижения</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon name="Lightbulb" size={24} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Умная автоматизация</h3>
                        <p className="text-sm text-muted-foreground">AI помощник для рутинных задач</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon name="Rocket" size={24} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Масштабируемость</h3>
                        <p className="text-sm text-muted-foreground">От 2 до 2000 человек в команде</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary">Возможности</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Всё что нужно для успеха
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Мощные инструменты, которые работают вместе для достижения ваших целей
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur hover:shadow-lg transition-all hover:scale-105">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                    <Icon name={feature.icon as any} size={28} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary">Отзывы</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Что говорят клиенты
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Присоединяйтесь к тысячам довольных пользователей по всему миру
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card/80 backdrop-blur">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={18} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">"{testimonial.text}"</p>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary">Тарифы</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Выберите подходящий план
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Прозрачные цены без скрытых платежей. Начните бесплатно прямо сейчас
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative ${plan.highlighted ? 'border-primary shadow-xl scale-105' : 'bg-card/50'}`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">Популярный</Badge>
                  </div>
                )}
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-5xl font-bold">{plan.price === '0' ? 'Бесплатно' : `₽${plan.price}`}</span>
                    {plan.price !== '0' && <span className="text-muted-foreground ml-2">{plan.period}</span>}
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${plan.highlighted ? 'bg-primary text-primary-foreground hover:bg-primary/90' : ''}`}
                    variant={plan.highlighted ? 'default' : 'outline'}
                  >
                    {plan.price === '0' ? 'Начать бесплатно' : 'Попробовать'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary">Контакты</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Свяжитесь с нами
            </h2>
            <p className="text-xl text-muted-foreground">
              Ответим на все ваши вопросы в течение 24 часов
            </p>
          </div>

          <Card className="bg-card/80 backdrop-blur">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-muted-foreground">support@nexusflow.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Телефон</h3>
                      <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Офис</h3>
                      <p className="text-muted-foreground">Москва, ул. Примерная, 123</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <input 
                    type="text" 
                    placeholder="Ваше имя"
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background"
                  />
                  <input 
                    type="email" 
                    placeholder="Email"
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background"
                  />
                  <textarea 
                    placeholder="Ваше сообщение"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background resize-none"
                  ></textarea>
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    Отправить сообщение
                  </Button>
                </div>
              </div>

              <div className="pt-8 border-t flex justify-center gap-4">
                <Button variant="outline" size="icon" className="rounded-full">
                  <Icon name="Twitter" size={20} />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Icon name="Linkedin" size={20} />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Icon name="Github" size={20} />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Icon name="Facebook" size={20} />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-foreground/5 py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Sparkles" size={24} className="text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold">NexusFlow</span>
            </div>
            
            <div className="flex gap-8">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                О продукте
              </button>
              <button 
                onClick={() => scrollToSection('features')}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Возможности
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Тарифы
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Контакты
              </button>
            </div>
            
            <p className="text-muted-foreground">
              © 2024 NexusFlow. Все права защищены
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
