import Image from "next/image"
import {
  ChevronLeft,
  PlusCircle,
  Upload,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Textarea } from "@/components/ui/textarea"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"
import { Category } from "@/types"
import { colors } from "@/constants"


export const description =
  "A product edit page. The product edit page has a form to edit the product details, stock, product category, product status, and product images. The product edit page has a sidebar navigation and a main content area. The main content area has a form to edit the product details, stock, product category, product status, and product images. The sidebar navigation has links to product details, stock, product category, product status, and product images."

export default function NewProductPage() {
  return (
    <div className="mx-auto w-full  grid flex-1 auto-rows-max gap-4">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" className="h-7 w-7">
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Back</span>
        </Button>
        <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
          Pro Controller
        </h1>
        <Badge variant="outline" className="ml-auto sm:ml-0">
          In stock
        </Badge>
        <div className="hidden items-center gap-2 md:ml-auto md:flex">
          <Button variant="outline" size="sm">
            Discard
          </Button>
          <Button size="sm">Save Product</Button>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
        <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
          <Card x-chunk="dashboard-07-chunk-0">
            <CardHeader>
              <CardTitle>Product Details</CardTitle>
              <CardDescription>
                Add product details like name, price, category and description
                here
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    type="text"
                    className="w-full"
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="category">Category</Label>
                  <Select>
                    <SelectTrigger id="category" aria-label="Select category">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.values(Category).map((category: string) => (
                        <SelectItem key={category} value={category}>
                          {category.charAt(0).toUpperCase() + category.slice(1)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    className="min-h-32"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-07-chunk-1">
            <CardHeader>
              <CardTitle>Stock</CardTitle>
              <CardDescription>
                Enter available stock quantity for each size and color here
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Color</TableHead>
                    <TableHead>Stock</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead className="w-[100px]">Size</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                  <TableCell>
                  <Select>
                    <SelectTrigger id="category" aria-label="Select category">
                      <SelectValue placeholder="Select category" defaultValue={'0000FF'} />
                    </SelectTrigger>
                    <SelectContent>
                      {colors.map((category) => (
                        <SelectItem key={category.colorCode} value={category.colorCode}>
                          {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </TableCell>
                    <TableCell>
                      <Label htmlFor="stock-1" className="sr-only">
                        Stock
                      </Label>
                      <Input id="stock-1" type="number" defaultValue="100" />
                    </TableCell>
                    <TableCell>
                      <Label htmlFor="price-1" className="sr-only">
                        Price
                      </Label>
                      <Input id="price-1" type="number" defaultValue="99.99" />
                    </TableCell>
                    <TableCell>
                      <ToggleGroup
                        type="single"
                        defaultValue="s"
                        variant="outline">
                        <ToggleGroupItem value="s">S</ToggleGroupItem>
                        <ToggleGroupItem value="m">M</ToggleGroupItem>
                        <ToggleGroupItem value="l">L</ToggleGroupItem>
                      </ToggleGroup>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-semibold">GGPC-002</TableCell>
                    <TableCell>
                      <Label htmlFor="stock-2" className="sr-only">
                        Stock
                      </Label>
                      <Input id="stock-2" type="number" defaultValue="143" />
                    </TableCell>
                    <TableCell>
                      <Label htmlFor="price-2" className="sr-only">
                        Price
                      </Label>
                      <Input id="price-2" type="number" defaultValue="99.99" />
                    </TableCell>
                    <TableCell>
                      <ToggleGroup
                        type="single"
                        defaultValue="m"
                        variant="outline">
                        <ToggleGroupItem value="s">S</ToggleGroupItem>
                        <ToggleGroupItem value="m">M</ToggleGroupItem>
                        <ToggleGroupItem value="l">L</ToggleGroupItem>
                      </ToggleGroup>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-semibold">GGPC-003</TableCell>
                    <TableCell>
                      <Label htmlFor="stock-3" className="sr-only">
                        Stock
                      </Label>
                      <Input id="stock-3" type="number" defaultValue="32" />
                    </TableCell>
                    <TableCell>
                      <Label htmlFor="price-3" className="sr-only">
                        Stock
                      </Label>
                      <Input id="price-3" type="number" defaultValue="99.99" />
                    </TableCell>
                    <TableCell>
                      <ToggleGroup
                        type="single"
                        defaultValue="s"
                        variant="outline">
                        <ToggleGroupItem value="s">S</ToggleGroupItem>
                        <ToggleGroupItem value="m">M</ToggleGroupItem>
                        <ToggleGroupItem value="l">L</ToggleGroupItem>
                      </ToggleGroup>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter className="justify-center border-t p-4">
              <Button size="sm" variant="ghost" className="gap-1">
                <PlusCircle className="h-3.5 w-3.5" />
                Add Variant
              </Button>
            </CardFooter>
          </Card>
        </div>
        <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
          <Card className="overflow-hidden" x-chunk="dashboard-07-chunk-4">
            <CardHeader>
              <CardTitle>Product Images</CardTitle>
              <CardDescription>
                Upload product images showcasing with diffrent colors
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-2">
                <Image
                  alt="Product image"
                  className="aspect-square w-full rounded-md object-cover"
                  height="300"
                  src="https://static.zara.net/assets/public/2322/0027/c9e74016bbe4/0db0f6077764/image-landscape-default-fill-2dd25bda-fe99-4331-82d9-fa972f862305-default_0/image-landscape-default-fill-2dd25bda-fe99-4331-82d9-fa972f862305-default_0.jpg?ts=1726069949953&w=1920"
                  width="300"
                />
                <div className="grid grid-cols-3 gap-2">
                  <button>
                    <Image
                      alt="Product image"
                      className="aspect-square w-full rounded-md object-cover"
                      height="84"
                      src="https://static.zara.net/assets/public/1574/ea6e/8b624b4ca69e/17cc2a923e91/image-landscape-fill-7711c085-08e4-46ff-ac1b-45c490327645-default_0/image-landscape-fill-7711c085-08e4-46ff-ac1b-45c490327645-default_0.jpg?ts=1725459257628&w=1920"
                      width="84"
                    />
                  </button>
                  <button>
                    <Image
                      alt="Product image"
                      className="aspect-square w-full rounded-md object-cover"
                      height="84"
                      src="https://static.zara.net/assets/public/6c28/b7c5/fc924cd6af35/c467f4b9d516/image-landscape-default-fill-fc6155ad-ca2f-48d3-85be-099a61f56560-default_0/image-landscape-default-fill-fc6155ad-ca2f-48d3-85be-099a61f56560-default_0.jpg?ts=1725457476667&w=1920"
                      width="84"
                    />
                  </button>
                  <button className="flex aspect-square w-full items-center justify-center rounded-md border border-dashed">
                    <Upload className="h-4 w-4 text-muted-foreground" />
                    <span className="sr-only">Upload</span>
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="flex items-center justify-center gap-2 md:hidden">
        <Button variant="outline" size="sm">
          Discard
        </Button>
        <Button size="sm">Save Product</Button>
      </div>
    </div>
  );
}
