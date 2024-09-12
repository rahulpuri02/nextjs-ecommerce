import Link from "next/link";
import {
  CircleUser,
  HomeIcon,
  Layers,
  Menu,
  Package2,
  ShoppingCart,
  Users,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Sidebar from "./_components/sidebar";

const navItems = [
  { label: 'Dashboard', href: '/admin', icon: HomeIcon },
  { label: 'Orders', href: '/admin/orders', icon: ShoppingCart },
  { label: 'Products', href: '/admin/products', icon: Layers },
  { label: 'Customers', href: '/admin/customers', icon: Users },
];

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  
  return (
   <div>
     <div className="grid min-h-[81.5vh] w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <Sidebar />
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <nav className="grid gap-2 text-lg font-medium">
                <Link
                  href="#"
                  className="flex items-center gap-2 text-base font-semibold">
                  <Package2 className="h-6 w-6" />
                  NN74
                </Link>
                {navItems.map((item, i) => {
                  return (
                    <Link
                      key={i}
                      href={item.href}
                      className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground">
                      <item.icon className="h-5 w-5" />
                      {item.label}
                      {item.label === "Orders" && (
                        <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                          6
                        </Badge>
                      )}
                    </Link>
                  );
                })}
              </nav>
            </SheetContent>
          </Sheet>
          <div className="w-full flex-1">
            <Badge variant={"outline"}>You are an admin</Badge>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 mb-6">
          {children}
        </main>
      </div>
    </div>
<footer className="w-[90vw]">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
        <Link
                  href="/admin"
                  className="flex items-center gap-2 text-base font-semibold">
                  <Package2 className="h-6 w-6" />
                  NN74
                </Link>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-muted-foreground mt-[9px] sm:mb-0 sm:mt-0">
                {
                  navItems.map((item,i) => {
                    if(item.href !== '/admin/analytics'){
                      return (
                        <Link className="hover:underline me-4 md:me-6" key={i} href={item.href}>
                          <li>{item.label}</li>
                        </Link>
                      )
                    }
                  })
                }
            </ul>
        </div>
        <hr className="my-6 border-1 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-muted-foreground sm:text-center">{`© ${new Date().getFullYear()} NN74 Clothing™ All Rights Reserved.`}</span>
    </div>
</footer>
   </div>
  );
};

export default DashboardLayout;
