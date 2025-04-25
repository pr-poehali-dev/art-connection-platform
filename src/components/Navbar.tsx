import { Link } from "react-router-dom";
import { 
  NavigationMenu, 
  NavigationMenuContent, 
  NavigationMenuItem, 
  NavigationMenuList, 
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Palette, LifeBuoy, Users } from "lucide-react";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Palette className="h-6 w-6 text-artist-primary" />
          <span className="font-bold text-xl gradient-text">АртКоннект</span>
        </Link>
        
        <NavigationMenu className="ml-auto">
          <NavigationMenuList>
            <NavigationMenuItem>
              {/* Исправлено: NavigationMenuLink заменен на обычный div с тем же стилем */}
              <Link to="/gallery" className={navigationMenuTriggerStyle()}>
                Галерея
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuTrigger>Ресурсы</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                  <li className="row-span-3">
                    {/* Используем асинхронный Link напрямую без NavigationMenuLink */}
                    <Link
                      to="/resources"
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-artist-primary/20 to-artist-accent/20 p-6 no-underline outline-none focus:shadow-md"
                    >
                      <LifeBuoy className="h-6 w-6 text-artist-primary mb-2" />
                      <div className="mb-2 mt-4 text-lg font-medium text-foreground">
                        Помощь художникам
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Гранты, материалы, мастерские и другие полезные ресурсы для творчества
                      </p>
                    </Link>
                  </li>
                  <ListItem to="/resources/grants" title="Гранты">
                    Финансовая поддержка для художников и проектов
                  </ListItem>
                  <ListItem to="/resources/materials" title="Материалы">
                    Скидки и предложения на художественные товары
                  </ListItem>
                  <ListItem to="/resources/studios" title="Мастерские">
                    Поиск и аренда помещений для работы
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuTrigger>Коллаборации</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                  <ListItem to="/collaborations/projects" title="Проекты">
                    Поиск заказчиков для индивидуальных проектов
                  </ListItem>
                  <ListItem to="/collaborations/forum" title="Форум">
                    Обмен опытом и организация совместных выставок
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              {/* Исправлено: NavigationMenuLink заменен на обычный Link */}
              <Link to="/login" className={cn(navigationMenuTriggerStyle(), "bg-artist-primary text-primary-foreground hover:bg-artist-primary/90")}>
                Войти
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};

interface ListItemProps {
  title: string;
  to: string;
  children: React.ReactNode;
}

const ListItem = ({ title, to, children }: ListItemProps) => {
  return (
    <li>
      {/* Используем Link напрямую без NavigationMenuLink */}
      <Link
        to={to}
        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
      >
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
          {children}
        </p>
      </Link>
    </li>
  );
};

export default Navbar;