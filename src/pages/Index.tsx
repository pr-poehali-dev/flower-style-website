import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';

const flowers = [
  {
    id: 1,
    name: 'Нежный рассвет',
    price: 3500,
    image: 'https://cdn.poehali.dev/projects/b9dcd7f6-d57d-497d-a386-abb58949b3ed/files/04f8184d-14a2-4899-8d48-cbeb79e12c4c.jpg',
    type: 'roses',
    color: 'pink',
    occasion: 'love',
    discount: 15
  },
  {
    id: 2,
    name: 'Лавандовая мечта',
    price: 4200,
    image: 'https://cdn.poehali.dev/projects/b9dcd7f6-d57d-497d-a386-abb58949b3ed/files/2a60ccc9-7088-4356-ab32-0d399caee1af.jpg',
    type: 'mixed',
    color: 'purple',
    occasion: 'birthday'
  },
  {
    id: 3,
    name: 'Весенний сад',
    price: 2800,
    image: 'https://cdn.poehali.dev/projects/b9dcd7f6-d57d-497d-a386-abb58949b3ed/files/dca69adb-e8c0-45ea-aa0d-e476b72e1449.jpg',
    type: 'tulips',
    color: 'mixed',
    occasion: 'anniversary',
    discount: 20
  },
  {
    id: 4,
    name: 'Королевская роскошь',
    price: 5600,
    image: 'https://cdn.poehali.dev/projects/b9dcd7f6-d57d-497d-a386-abb58949b3ed/files/04f8184d-14a2-4899-8d48-cbeb79e12c4c.jpg',
    type: 'roses',
    color: 'red',
    occasion: 'love'
  },
  {
    id: 5,
    name: 'Пионовая нежность',
    price: 4800,
    image: 'https://cdn.poehali.dev/projects/b9dcd7f6-d57d-497d-a386-abb58949b3ed/files/2a60ccc9-7088-4356-ab32-0d399caee1af.jpg',
    type: 'peonies',
    color: 'white',
    occasion: 'wedding'
  },
  {
    id: 6,
    name: 'Солнечный день',
    price: 3200,
    image: 'https://cdn.poehali.dev/projects/b9dcd7f6-d57d-497d-a386-abb58949b3ed/files/dca69adb-e8c0-45ea-aa0d-e476b72e1449.jpg',
    type: 'mixed',
    color: 'yellow',
    occasion: 'birthday',
    discount: 10
  }
];

const flowerTypes = [
  { value: 'roses', label: 'Розы' },
  { value: 'tulips', label: 'Тюльпаны' },
  { value: 'peonies', label: 'Пионы' },
  { value: 'mixed', label: 'Микс' }
];

const colors = [
  { value: 'red', label: 'Красные' },
  { value: 'pink', label: 'Розовые' },
  { value: 'white', label: 'Белые' },
  { value: 'yellow', label: 'Жёлтые' },
  { value: 'purple', label: 'Фиолетовые' },
  { value: 'mixed', label: 'Микс' }
];

const occasions = [
  { value: 'love', label: 'Любовь' },
  { value: 'birthday', label: 'День рождения' },
  { value: 'wedding', label: 'Свадьба' },
  { value: 'anniversary', label: 'Годовщина' }
];

export default function Index() {
  const [activeSection, setActiveSection] = useState<'hero' | 'catalog' | 'promo'>('hero');
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedOccasions, setSelectedOccasions] = useState<string[]>([]);

  const toggleFilter = (value: string, filters: string[], setFilters: (filters: string[]) => void) => {
    if (filters.includes(value)) {
      setFilters(filters.filter(f => f !== value));
    } else {
      setFilters([...filters, value]);
    }
  };

  const filteredFlowers = flowers.filter(flower => {
    const matchesPrice = flower.price >= priceRange[0] && flower.price <= priceRange[1];
    const matchesType = selectedTypes.length === 0 || selectedTypes.includes(flower.type);
    const matchesColor = selectedColors.length === 0 || selectedColors.includes(flower.color);
    const matchesOccasion = selectedOccasions.length === 0 || selectedOccasions.includes(flower.occasion);
    
    return matchesPrice && matchesType && matchesColor && matchesOccasion;
  });

  const promoFlowers = flowers.filter(f => f.discount);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Flower2" size={32} className="text-primary" />
            <h1 className="text-3xl font-bold text-primary">Флора</h1>
          </div>
          
          <div className="hidden md:flex gap-6">
            <button 
              onClick={() => setActiveSection('hero')}
              className={`text-lg transition-colors ${activeSection === 'hero' ? 'text-primary font-semibold' : 'text-foreground/70 hover:text-primary'}`}
            >
              Главная
            </button>
            <button 
              onClick={() => setActiveSection('catalog')}
              className={`text-lg transition-colors ${activeSection === 'catalog' ? 'text-primary font-semibold' : 'text-foreground/70 hover:text-primary'}`}
            >
              Каталог
            </button>
            <button 
              onClick={() => setActiveSection('promo')}
              className={`text-lg transition-colors ${activeSection === 'promo' ? 'text-primary font-semibold' : 'text-foreground/70 hover:text-primary'}`}
            >
              Акции
            </button>
          </div>

          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Icon name="ShoppingCart" size={20} />
          </Button>
        </div>
      </nav>

      {activeSection === 'hero' && (
        <section className="pt-24 pb-16 px-4 animate-fade-in">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-6xl md:text-7xl font-bold text-foreground leading-tight">
                  Цветы для <span className="text-primary">особенных</span> моментов
                </h2>
                <p className="text-xl text-muted-foreground">
                  Создаём букеты, которые дарят радость и вдохновение. Свежие цветы с доставкой по городу.
                </p>
                <div className="flex gap-4">
                  <Button 
                    size="lg" 
                    className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8"
                    onClick={() => setActiveSection('catalog')}
                  >
                    Выбрать букет
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-primary text-primary hover:bg-primary/10 text-lg px-8"
                    onClick={() => setActiveSection('promo')}
                  >
                    Акции
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl"></div>
                <img 
                  src={flowers[0].image}
                  alt="Букет цветов"
                  className="relative rounded-3xl shadow-2xl animate-scale-in w-full"
                />
              </div>
            </div>

            <div className="mt-20 grid md:grid-cols-3 gap-6">
              <Card className="border-primary/20 bg-white/60 backdrop-blur hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Icon name="Truck" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Быстрая доставка</h3>
                    <p className="text-muted-foreground">Доставим за 2 часа в любую точку города</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-accent/20 bg-white/60 backdrop-blur hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-full">
                    <Icon name="Heart" size={24} className="text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Свежие цветы</h3>
                    <p className="text-muted-foreground">Работаем только с проверенными поставщиками</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-secondary/20 bg-white/60 backdrop-blur hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="p-3 bg-secondary/10 rounded-full">
                    <Icon name="Sparkles" size={24} className="text-secondary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Уникальный дизайн</h3>
                    <p className="text-muted-foreground">Каждый букет создаётся с душой</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {activeSection === 'catalog' && (
        <section className="pt-24 pb-16 px-4 animate-fade-in">
          <div className="container mx-auto">
            <h2 className="text-5xl font-bold text-center mb-12">Каталог букетов</h2>
            
            <div className="grid lg:grid-cols-4 gap-8">
              <div className="lg:col-span-1 space-y-6">
                <Card className="bg-white/60 backdrop-blur">
                  <CardContent className="p-6 space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Цена</h3>
                      <Slider 
                        value={priceRange}
                        onValueChange={setPriceRange}
                        min={0}
                        max={10000}
                        step={100}
                        className="mb-2"
                      />
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>{priceRange[0]} ₽</span>
                        <span>{priceRange[1]} ₽</span>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-4">Тип цветов</h3>
                      <div className="space-y-3">
                        {flowerTypes.map(type => (
                          <div key={type.value} className="flex items-center gap-2">
                            <Checkbox
                              checked={selectedTypes.includes(type.value)}
                              onCheckedChange={() => toggleFilter(type.value, selectedTypes, setSelectedTypes)}
                            />
                            <label className="text-sm cursor-pointer">{type.label}</label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-4">Цвет</h3>
                      <div className="space-y-3">
                        {colors.map(color => (
                          <div key={color.value} className="flex items-center gap-2">
                            <Checkbox
                              checked={selectedColors.includes(color.value)}
                              onCheckedChange={() => toggleFilter(color.value, selectedColors, setSelectedColors)}
                            />
                            <label className="text-sm cursor-pointer">{color.label}</label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-4">Повод</h3>
                      <div className="space-y-3">
                        {occasions.map(occasion => (
                          <div key={occasion.value} className="flex items-center gap-2">
                            <Checkbox
                              checked={selectedOccasions.includes(occasion.value)}
                              onCheckedChange={() => toggleFilter(occasion.value, selectedOccasions, setSelectedOccasions)}
                            />
                            <label className="text-sm cursor-pointer">{occasion.label}</label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => {
                        setPriceRange([0, 10000]);
                        setSelectedTypes([]);
                        setSelectedColors([]);
                        setSelectedOccasions([]);
                      }}
                    >
                      Сбросить фильтры
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <div className="lg:col-span-3">
                <div className="mb-4 text-muted-foreground">
                  Найдено букетов: {filteredFlowers.length}
                </div>
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredFlowers.map(flower => (
                    <Card key={flower.id} className="overflow-hidden bg-white/60 backdrop-blur hover:shadow-xl transition-all hover:scale-105">
                      <div className="relative">
                        <img 
                          src={flower.image}
                          alt={flower.name}
                          className="w-full h-64 object-cover"
                        />
                        {flower.discount && (
                          <Badge className="absolute top-4 right-4 bg-destructive text-destructive-foreground">
                            -{flower.discount}%
                          </Badge>
                        )}
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-2xl font-semibold mb-2">{flower.name}</h3>
                        <div className="flex items-center gap-2 mb-4">
                          {flower.discount ? (
                            <>
                              <span className="text-2xl font-bold text-primary">
                                {Math.round(flower.price * (1 - flower.discount / 100))} ₽
                              </span>
                              <span className="text-lg text-muted-foreground line-through">
                                {flower.price} ₽
                              </span>
                            </>
                          ) : (
                            <span className="text-2xl font-bold text-primary">{flower.price} ₽</span>
                          )}
                        </div>
                        <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                          <Icon name="ShoppingCart" size={18} className="mr-2" />
                          В корзину
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {activeSection === 'promo' && (
        <section className="pt-24 pb-16 px-4 animate-fade-in">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-bold mb-4">Акции и специальные предложения</h2>
              <p className="text-xl text-muted-foreground">Успейте купить букеты по выгодным ценам</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {promoFlowers.map(flower => (
                <Card key={flower.id} className="overflow-hidden bg-white/60 backdrop-blur hover:shadow-xl transition-all hover:scale-105">
                  <div className="relative">
                    <img 
                      src={flower.image}
                      alt={flower.name}
                      className="w-full h-72 object-cover"
                    />
                    <div className="absolute top-4 right-4 space-y-2">
                      <Badge className="bg-destructive text-destructive-foreground text-lg px-4 py-2">
                        -{flower.discount}%
                      </Badge>
                      <Badge className="bg-primary text-primary-foreground block text-center">
                        АКЦИЯ
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-semibold mb-3">{flower.name}</h3>
                    <div className="flex items-baseline gap-3 mb-4">
                      <span className="text-3xl font-bold text-primary">
                        {Math.round(flower.price * (1 - flower.discount! / 100))} ₽
                      </span>
                      <span className="text-xl text-muted-foreground line-through">
                        {flower.price} ₽
                      </span>
                    </div>
                    <div className="mb-4 text-sm text-muted-foreground">
                      Экономия: {flower.price - Math.round(flower.price * (1 - flower.discount! / 100))} ₽
                    </div>
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                      <Icon name="ShoppingCart" size={18} className="mr-2" />
                      Купить по акции
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-12 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 backdrop-blur border-primary/20">
              <CardContent className="p-8 text-center">
                <Icon name="Gift" size={48} className="mx-auto mb-4 text-primary" />
                <h3 className="text-3xl font-bold mb-4">Подпишитесь на рассылку</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Получайте эксклюзивные предложения и скидки до 30%
                </p>
                <div className="flex max-w-md mx-auto gap-4">
                  <input 
                    type="email" 
                    placeholder="Ваш email"
                    className="flex-1 px-4 py-2 rounded-lg border border-input bg-white"
                  />
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                    Подписаться
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      <footer className="bg-foreground/5 py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Flower2" size={28} className="text-primary" />
            <span className="text-2xl font-bold text-primary">Флора</span>
          </div>
          <p className="text-muted-foreground">
            © 2024 Флора. Цветы с душой для особенных моментов
          </p>
        </div>
      </footer>
    </div>
  );
}
