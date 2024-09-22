import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { navigationMenu } from "@/constants"

export function NavigationMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-7 w-7 md:h-12 md:w-12 stroke-[1.5px] stroke-white">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 9h16.5m-16.5 6.75h16.5"
            />
          </svg>
        </button>
      </SheetTrigger>
      <SheetContent className="px-0">
        <SheetHeader>
          <SheetTitle className="font-bold text-base sm:text-xl md:text-3xl text-black transform -translate-x-[11px] text-center">
            NN CLOTHING
          </SheetTitle>
        </SheetHeader>
        <div className="grid gap-4 py-4 border-t-gray-200 border-t-[1.5px] md:border-t-2 mt-5">
          <div className="md:mt-6 p-6 md:p-8 text-base md:text-xl lg:text-2xl flex flex-col gap-4 md:gap-6">
            {navigationMenu.map((item, i) => (
              <div
                className="flex gap-2 uppercase sm:gap-3 cursor-pointer"
                key={i}>
                <p className="text-sm md:text-xl font-medium">{item.label}</p>
                {item.isChilds && (
                  <button className="flex items-center justify-center">
                    <svg
                      className="w-3 h-3 sm:w-4 sm:h-4"
                      viewBox="0 0 17 16"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.4 7L7.12 1.42 8.46 0l7.55 8-7.55 8-1.34-1.41 5.28-5.6H0V7h12.4z"></path>
                    </svg>
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
