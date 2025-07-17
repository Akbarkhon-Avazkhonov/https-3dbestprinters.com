import { CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  CheckCircle,
  Star,
  ArrowRight,
  Printer,
  Shield,
  ExternalLink,
  Play,
  Award,
  Truck,
  RotateCcw,
  Clock,
  Ruler,
  Thermometer,
  Wifi,
  Settings,
  X,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function PrinterLandingPage() {
  const amazonUrl = "https://amazon.com/dp/B08KHQ8Q9P" // Replace with actual link

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center space-x-2">
            <Printer className="h-8 w-8 text-pink-600" />
            <span className="text-2xl font-bold text-gray-900">3D Print Pro</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#overview" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              Overview
            </Link>
            <Link href="#specs" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              Specifications
            </Link>
            <Link href="#reviews" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              Reviews
            </Link>
            <Link href="#gallery" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              Gallery
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button asChild className="bg-pink-600 hover:bg-pink-700">
              <Link href={amazonUrl} target="_blank" rel="noopener noreferrer">
                Buy on Amazon
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-pink-100 text-pink-800 hover:bg-pink-100">
                  🔥 Best Seller 2024
                </Badge>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                  Ender 3 V3 SE
                  <span className="text-pink-600"> 3D Printer</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-[600px]">
                  Professional 3D printer for beginners and experienced users. High print quality, easy setup, and
                  affordable price point.
                </p>
              </div>

              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">4.8/5 (2,847 reviews)</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="bg-pink-600 hover:bg-pink-700 text-lg px-8 py-6">
                  <Link href={amazonUrl} target="_blank" rel="noopener noreferrer">
                    Buy for $199
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Video
                </Button>
              </div>

              <div className="flex items-center space-x-8 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Truck className="h-5 w-5 text-pink-600" />
                  <span>Free Shipping</span>
                </div>
                <div className="flex items-center space-x-2">
                  <RotateCcw className="h-5 w-5 text-pink-600" />
                  <span>30-Day Returns</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-pink-600" />
                  <span>1-Year Warranty</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-400 rounded-3xl blur-3xl opacity-20"></div>
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Ender 3 V3 SE 3D Printer"
                width={600}
                height={600}
                className="relative rounded-2xl shadow-2xl border"
              />
              <div className="absolute top-4 right-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                -25%
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Features */}
      <section className="py-16 bg-white border-b">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mx-auto">
                <Ruler className="h-6 w-6 text-pink-600" />
              </div>
              <h3 className="font-semibold">Build Volume</h3>
              <p className="text-sm text-gray-600">220×220×250 mm</p>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mx-auto">
                <Thermometer className="h-6 w-6 text-pink-600" />
              </div>
              <h3 className="font-semibold">Temperature</h3>
              <p className="text-sm text-gray-600">Up to 260°C</p>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mx-auto">
                <Clock className="h-6 w-6 text-pink-600" />
              </div>
              <h3 className="font-semibold">Assembly</h3>
              <p className="text-sm text-gray-600">30 minutes</p>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mx-auto">
                <Wifi className="h-6 w-6 text-pink-600" />
              </div>
              <h3 className="font-semibold">Connectivity</h3>
              <p className="text-sm text-gray-600">Wi-Fi + USB</p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Overview */}
      <section id="overview" className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="bg-pink-100 text-pink-800">
              Detailed Review
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Why Choose Ender 3 V3 SE?</h2>
          </div>

          <Tabs defaultValue="pros" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="pros">Advantages</TabsTrigger>
              <TabsTrigger value="cons">Disadvantages</TabsTrigger>
              <TabsTrigger value="comparison">Comparison</TabsTrigger>
            </TabsList>

            <TabsContent value="pros" className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                      <CardTitle>Easy Assembly</CardTitle>
                    </div>
                    <CardDescription>
                      95% pre-assembled. Only 6 screws needed for complete assembly in 30 minutes.
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                      <CardTitle>Auto-Leveling</CardTitle>
                    </div>
                    <CardDescription>
                      CR Touch system automatically levels the bed for perfect first prints.
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                      <CardTitle>Print Quality</CardTitle>
                    </div>
                    <CardDescription>
                      Layer accuracy up to 0.1mm. Prints PLA, ABS, PETG and other materials.
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                      <CardTitle>Value for Money</CardTitle>
                    </div>
                    <CardDescription>Best price-to-quality ratio in its class. Perfect for beginners.</CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="cons" className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <X className="h-6 w-6 text-red-600" />
                      <CardTitle>Limited Build Volume</CardTitle>
                    </div>
                    <CardDescription>220×220×250mm size may be small for large projects.</CardDescription>
                  </CardHeader>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <X className="h-6 w-6 text-red-600" />
                      <CardTitle>Noise Level</CardTitle>
                    </div>
                    <CardDescription>
                      Can be noisy during operation, especially at night in residential areas.
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <X className="h-6 w-6 text-red-600" />
                      <CardTitle>Plastic Components</CardTitle>
                    </div>
                    <CardDescription>Some plastic parts may require replacement with intensive use.</CardDescription>
                  </CardHeader>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <X className="h-6 w-6 text-red-600" />
                      <CardTitle>Learning Curve</CardTitle>
                    </div>
                    <CardDescription>Requires time to learn settings for optimal results.</CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="comparison" className="space-y-6">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 p-3 text-left">Feature</th>
                      <th className="border border-gray-300 p-3 text-center">Ender 3 V3 SE</th>
                      <th className="border border-gray-300 p-3 text-center">Prusa MINI+</th>
                      <th className="border border-gray-300 p-3 text-center">Bambu A1 mini</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">Price</td>
                      <td className="border border-gray-300 p-3 text-center text-green-600 font-semibold">$199</td>
                      <td className="border border-gray-300 p-3 text-center">$429</td>
                      <td className="border border-gray-300 p-3 text-center">$299</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-3 font-medium">Build Volume</td>
                      <td className="border border-gray-300 p-3 text-center">220×220×250mm</td>
                      <td className="border border-gray-300 p-3 text-center">180×180×180mm</td>
                      <td className="border border-gray-300 p-3 text-center">180×180×180mm</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">Auto-Leveling</td>
                      <td className="border border-gray-300 p-3 text-center">✅</td>
                      <td className="border border-gray-300 p-3 text-center">✅</td>
                      <td className="border border-gray-300 p-3 text-center">✅</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-3 font-medium">Wi-Fi</td>
                      <td className="border border-gray-300 p-3 text-center">✅</td>
                      <td className="border border-gray-300 p-3 text-center">✅</td>
                      <td className="border border-gray-300 p-3 text-center">✅</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Technical Specs */}
      <section id="specs" className="py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="bg-pink-100 text-pink-800">
              Technical Specifications
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Complete Specifications</h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 max-w-6xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Settings className="h-5 w-5 text-pink-600" />
                  <span>Main Specifications</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Print Technology:</span>
                  <span className="font-medium">FDM (Fused Deposition Modeling)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Build Volume:</span>
                  <span className="font-medium">220 × 220 × 250 mm</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Positioning Accuracy:</span>
                  <span className="font-medium">±0.1 mm</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Minimum Layer Height:</span>
                  <span className="font-medium">0.1 mm</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Print Speed:</span>
                  <span className="font-medium">Up to 180 mm/s</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Nozzle Diameter:</span>
                  <span className="font-medium">0.4 mm (standard)</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Thermometer className="h-5 w-5 text-pink-600" />
                  <span>Temperature Specifications</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Extruder Temperature:</span>
                  <span className="font-medium">Up to 260°C</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Bed Temperature:</span>
                  <span className="font-medium">Up to 100°C</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Supported Materials:</span>
                  <span className="font-medium">PLA, ABS, PETG, TPU</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Filament Diameter:</span>
                  <span className="font-medium">1.75 mm</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Heat-up Time:</span>
                  <span className="font-medium">5 minutes to 200°C</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Auto-Leveling:</span>
                  <span className="font-medium">CR Touch (32 points)</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="bg-pink-100 text-pink-800">
              Customer Reviews
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What Our Customers Say</h2>
            <div className="flex items-center justify-center space-x-2">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-lg font-semibold">4.8 out of 5</span>
              <span className="text-gray-600">(2,847 reviews)</span>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardDescription className="text-base">
                  "Excellent printer for beginners! Assembled in 20 minutes, first print came out perfect. Auto-leveling
                  works flawlessly."
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <div className="flex items-center space-x-3">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="Alex M."
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-semibold">Alex M.</p>
                    <p className="text-sm text-gray-600">3D Printing Beginner</p>
                  </div>
                </div>
              </CardFooter>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardDescription className="text-base">
                  "Using it for 6 months for prototyping. Print quality is excellent, especially for this price. Highly
                  recommend!"
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <div className="flex items-center space-x-3">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="Maria K."
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-semibold">Maria K.</p>
                    <p className="text-sm text-gray-600">Design Engineer</p>
                  </div>
                </div>
              </CardFooter>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <Star className="h-4 w-4 text-gray-300" />
                </div>
                <CardDescription className="text-base">
                  "Good printer, but a bit noisy. Print quality is excellent, assembly really is simple. Great value for
                  money!"
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <div className="flex items-center space-x-3">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="David P."
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-semibold">David P.</p>
                    <p className="text-sm text-gray-600">3D Printing Enthusiast</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="bg-pink-100 text-pink-800">
              Print Gallery
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Print Examples</h2>
            <p className="text-xl text-gray-600 max-w-[800px] mx-auto">
              See the print quality and variety of projects you can create
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Dragon Miniature", time: "8 hours", material: "PLA", difficulty: "Medium" },
              { name: "Functional Part", time: "3 hours", material: "ABS", difficulty: "Easy" },
              { name: "Decorative Vase", time: "12 hours", material: "PETG", difficulty: "Easy" },
              { name: "Prototype Housing", time: "6 hours", material: "ABS", difficulty: "Hard" },
              { name: "Building Blocks", time: "4 hours", material: "PLA", difficulty: "Medium" },
              { name: "Home Decoration", time: "10 hours", material: "PLA", difficulty: "Easy" },
            ].map((item, i) => (
              <div key={i} className="relative group overflow-hidden rounded-lg">
                <Image
                  src={`/placeholder.svg?height=300&width=400&text=${item.name}`}
                  alt={item.name}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="font-semibold mb-2">{item.name}</h3>
                    <div className="text-sm space-y-1">
                      <p>Print Time: {item.time}</p>
                      <p>Material: {item.material}</p>
                      <p>Difficulty: {item.difficulty}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="bg-pink-100 text-pink-800">
              Video Reviews
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">See It In Action</h2>
            <p className="text-xl text-gray-600 max-w-[800px] mx-auto">
              Detailed video reviews, unboxing and first prints
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=200&width=350&text=Unboxing"
                  alt="Printer unboxing"
                  width={350}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2">Unboxing and First Impressions</h3>
                <p className="text-sm text-gray-600 mb-3">Detailed review of package contents and build quality</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>12:34</span>
                  <span>👁 125K views</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=200&width=350&text=Assembly"
                  alt="Printer assembly"
                  width={350}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2">Step-by-Step Assembly in 30 Minutes</h3>
                <p className="text-sm text-gray-600 mb-3">Complete assembly guide from A to Z</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>28:45</span>
                  <span>👁 89K views</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=200&width=350&text=First Print"
                  alt="First print"
                  width={350}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2">First Print and Calibration</h3>
                <p className="text-sm text-gray-600 mb-3">Printer setup and test print</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>15:22</span>
                  <span>👁 156K views</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="bg-pink-100 text-pink-800">
              Print Materials
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Supported Materials</h2>
            <p className="text-xl text-gray-600 max-w-[800px] mx-auto">
              Wide selection of materials for various tasks and projects
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">PLA</span>
                </div>
                <CardTitle>PLA Plastic</CardTitle>
                <CardDescription>Perfect for beginners</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Temperature:</span>
                    <span>190-220°C</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Bed:</span>
                    <span>50-60°C</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Difficulty:</span>
                    <span className="text-green-600">Easy</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full bg-transparent">
                  Buy PLA
                </Button>
              </CardFooter>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-red-600">ABS</span>
                </div>
                <CardTitle>ABS Plastic</CardTitle>
                <CardDescription>Strong and flexible</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Temperature:</span>
                    <span>230-250°C</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Bed:</span>
                    <span>80-100°C</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Difficulty:</span>
                    <span className="text-yellow-600">Medium</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full bg-transparent">
                  Buy ABS
                </Button>
              </CardFooter>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-blue-600">PETG</span>
                </div>
                <CardTitle>PETG Plastic</CardTitle>
                <CardDescription>Clear and durable</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Temperature:</span>
                    <span>230-250°C</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Bed:</span>
                    <span>70-80°C</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Difficulty:</span>
                    <span className="text-yellow-600">Medium</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full bg-transparent">
                  Buy PETG
                </Button>
              </CardFooter>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">TPU</span>
                </div>
                <CardTitle>TPU Rubber</CardTitle>
                <CardDescription>Flexible material</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Temperature:</span>
                    <span>210-230°C</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Bed:</span>
                    <span>50-60°C</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Difficulty:</span>
                    <span className="text-red-600">Hard</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full bg-transparent">
                  Buy TPU
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Setup Guide Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="bg-pink-100 text-pink-800">
              Setup Guide
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Step-by-Step Instructions</h2>
            <p className="text-xl text-gray-600 max-w-[800px] mx-auto">Complete guide from unboxing to first print</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="unbox" className="w-full">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="unbox">Unboxing</TabsTrigger>
                <TabsTrigger value="assembly">Assembly</TabsTrigger>
                <TabsTrigger value="software">Software</TabsTrigger>
                <TabsTrigger value="calibration">Calibration</TabsTrigger>
                <TabsTrigger value="print">Printing</TabsTrigger>
              </TabsList>

              <TabsContent value="unbox" className="space-y-6">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <span className="w-8 h-8 bg-pink-600 text-white rounded-full flex items-center justify-center text-sm">
                        1
                      </span>
                      <span>Unboxing</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <h4 className="font-semibold mb-2">What's in the box:</h4>
                        <ul className="space-y-1 text-sm">
                          <li>✓ Printer base (95% assembled)</li>
                          <li>✓ Portal frame</li>
                          <li>✓ Extruder assembly</li>
                          <li>✓ Power supply</li>
                          <li>✓ Glass build plate</li>
                          <li>✓ Cables and wires</li>
                          <li>✓ Tools</li>
                          <li>✓ Sample PLA filament</li>
                          <li>✓ SD card with test files</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Included tools:</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• Hex keys</li>
                          <li>• Screwdriver</li>
                          <li>• Wire cutters</li>
                          <li>• Bed scraper</li>
                          <li>• Spare screws</li>
                          <li>• Rail lubricant</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="assembly" className="space-y-6">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <span className="w-8 h-8 bg-pink-600 text-white rounded-full flex items-center justify-center text-sm">
                        2
                      </span>
                      <span>Printer Assembly</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-6">
                      <div className="border-l-4 border-pink-600 pl-4">
                        <h4 className="font-semibold mb-2">Step 1: Install vertical frame</h4>
                        <p className="text-sm text-gray-600 mb-2">Time: 5 minutes</p>
                        <ul className="space-y-1 text-sm">
                          <li>• Mount vertical frame to base</li>
                          <li>• Tighten 4 screws with hex key</li>
                          <li>• Check frame perpendicularity</li>
                        </ul>
                      </div>

                      <div className="border-l-4 border-pink-600 pl-4">
                        <h4 className="font-semibold mb-2">Step 2: Install extruder</h4>
                        <p className="text-sm text-gray-600 mb-2">Time: 10 minutes</p>
                        <ul className="space-y-1 text-sm">
                          <li>• Mount extruder to carriage</li>
                          <li>• Connect all cables according to labels</li>
                          <li>• Install filament guide tube</li>
                        </ul>
                      </div>

                      <div className="border-l-4 border-pink-600 pl-4">
                        <h4 className="font-semibold mb-2">Step 3: Connect electronics</h4>
                        <p className="text-sm text-gray-600 mb-2">Time: 10 minutes</p>
                        <ul className="space-y-1 text-sm">
                          <li>• Connect power supply</li>
                          <li>• Connect all cables to motherboard</li>
                          <li>• Check connection security</li>
                        </ul>
                      </div>

                      <div className="border-l-4 border-pink-600 pl-4">
                        <h4 className="font-semibold mb-2">Step 4: Install bed</h4>
                        <p className="text-sm text-gray-600 mb-2">Time: 5 minutes</p>
                        <ul className="space-y-1 text-sm">
                          <li>• Install glass build plate</li>
                          <li>• Secure with clips</li>
                          <li>• Check surface levelness</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="software" className="space-y-6">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <span className="w-8 h-8 bg-pink-600 text-white rounded-full flex items-center justify-center text-sm">
                        3
                      </span>
                      <span>Software Installation</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <h4 className="font-semibold mb-3">Recommended Software:</h4>
                        <div className="space-y-4">
                          <div className="border rounded-lg p-4">
                            <h5 className="font-medium">Creality Print (Slicer)</h5>
                            <p className="text-sm text-gray-600">Official slicer from Creality</p>
                            <Button size="sm" className="mt-2">
                              Download
                            </Button>
                          </div>
                          <div className="border rounded-lg p-4">
                            <h5 className="font-medium">PrusaSlicer</h5>
                            <p className="text-sm text-gray-600">Popular slicer with advanced settings</p>
                            <Button size="sm" className="mt-2">
                              Download
                            </Button>
                          </div>
                          <div className="border rounded-lg p-4">
                            <h5 className="font-medium">Cura</h5>
                            <p className="text-sm text-gray-600">Free slicer from Ultimaker</p>
                            <Button size="sm" className="mt-2">
                              Download
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Slicer Setup:</h4>
                        <div className="space-y-3">
                          <div className="bg-gray-50 p-3 rounded">
                            <h5 className="font-medium text-sm">Basic PLA settings:</h5>
                            <div className="text-sm text-gray-600 mt-1">
                              <p>• Extruder temperature: 200°C</p>
                              <p>• Bed temperature: 60°C</p>
                              <p>• Print speed: 50 mm/s</p>
                              <p>• Layer height: 0.2 mm</p>
                              <p>• Infill: 20%</p>
                            </div>
                          </div>
                          <div className="bg-gray-50 p-3 rounded">
                            <h5 className="font-medium text-sm">Support settings:</h5>
                            <div className="text-sm text-gray-600 mt-1">
                              <p>• Support angle: 45°</p>
                              <p>• Density: 15%</p>
                              <p>• Type: Linear</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="calibration" className="space-y-6">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <span className="w-8 h-8 bg-pink-600 text-white rounded-full flex items-center justify-center text-sm">
                        4
                      </span>
                      <span>Printer Calibration</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-6">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2 text-blue-900">Automatic Bed Leveling</h4>
                        <p className="text-sm text-blue-800 mb-3">CR Touch system automatically levels the bed</p>
                        <div className="space-y-2 text-sm">
                          <p>1. Turn on printer</p>
                          <p>2. Select "Auto Home" in menu</p>
                          <p>3. Start "Auto Bed Leveling"</p>
                          <p>4. Wait for completion (2-3 minutes)</p>
                        </div>
                      </div>

                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2 text-green-900">Extruder Calibration</h4>
                        <p className="text-sm text-green-800 mb-3">Filament feed adjustment</p>
                        <div className="space-y-2 text-sm">
                          <p>1. Mark 120mm filament from extruder</p>
                          <p>2. Command 100mm extrusion</p>
                          <p>3. Measure remaining filament</p>
                          <p>4. Calculate and set E-steps</p>
                        </div>
                      </div>

                      <div className="bg-yellow-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2 text-yellow-900">Temperature Calibration</h4>
                        <p className="text-sm text-yellow-800 mb-3">Finding optimal temperature</p>
                        <div className="space-y-2 text-sm">
                          <p>1. Print temperature tower</p>
                          <p>2. Evaluate quality at different levels</p>
                          <p>3. Choose optimal temperature</p>
                          <p>4. Save settings in profile</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="print" className="space-y-6">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <span className="w-8 h-8 bg-pink-600 text-white rounded-full flex items-center justify-center text-sm">
                        5
                      </span>
                      <span>First Print</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-6">
                      <div className="bg-pink-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2 text-pink-900">Print Preparation</h4>
                        <div className="space-y-2 text-sm">
                          <p>1. Install PLA filament spool</p>
                          <p>2. Load filament through extruder</p>
                          <p>3. Clean bed with isopropyl alcohol</p>
                          <p>4. Ensure nozzle is clean</p>
                        </div>
                      </div>

                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2 text-green-900">First Model Selection</h4>
                        <p className="text-sm text-green-800 mb-3">Recommended models for beginners:</p>
                        <div className="grid gap-2 md:grid-cols-2 text-sm">
                          <div className="border border-green-200 p-2 rounded">
                            <strong>Calibration Cube</strong>
                            <p>Time: 30 min</p>
                            <p>Material: 5g PLA</p>
                          </div>
                          <div className="border border-green-200 p-2 rounded">
                            <strong>Benchy (Boat)</strong>
                            <p>Time: 1 hour</p>
                            <p>Material: 13g PLA</p>
                          </div>
                          <div className="border border-green-200 p-2 rounded">
                            <strong>Owl</strong>
                            <p>Time: 2 hours</p>
                            <p>Material: 20g PLA</p>
                          </div>
                          <div className="border border-green-200 p-2 rounded">
                            <strong>Creality Logo</strong>
                            <p>Time: 45 min</p>
                            <p>Material: 8g PLA</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2 text-blue-900">Print Monitoring</h4>
                        <div className="space-y-2 text-sm">
                          <p>• Watch first layers - they're critical</p>
                          <p>• Check bed adhesion</p>
                          <p>• Monitor temperature</p>
                          <p>• Listen to printer sounds</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="bg-pink-100 text-pink-800">
              Frequently Asked Questions
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Popular Questions Answered</h2>
            <p className="text-xl text-gray-600 max-w-[800px] mx-auto">
              Common questions about the Ender 3 V3 SE 3D printer
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "How long does printer assembly take?",
                answer:
                  "Assembly takes approximately 30-45 minutes. The printer comes 95% pre-assembled, requiring only installation of a few main components and cable connections. Detailed instructions and videos help even beginners succeed.",
              },
              {
                question: "What filament is best for beginners?",
                answer:
                  "We recommend starting with PLA plastic. It prints easily at 190-220°C, doesn't require bed heating, has minimal odor, and is safe. PLA is ideal for learning 3D printing basics.",
              },
              {
                question: "Do I need to buy additional tools?",
                answer:
                  "No, all necessary tools are included. However, for convenience you might consider: additional nozzles, spare glass beds, filament in various colors.",
              },
              {
                question: "How often does the printer need calibration?",
                answer:
                  "Auto-calibration runs automatically before each print. Manual calibration may be needed once a month or after transporting the printer. The CR Touch system greatly simplifies this process.",
              },
              {
                question: "Can I print without bed heating?",
                answer:
                  "Yes, for PLA bed heating isn't required, but 50-60°C is recommended for better adhesion. For ABS and PETG, bed heating is mandatory.",
              },
              {
                question: "What's the maximum part size I can print?",
                answer:
                  "Maximum print size: 220×220×250 mm. This is sufficient for most household and prototype tasks. Large objects can be split into parts for printing.",
              },
              {
                question: "What if prints don't stick to the bed?",
                answer:
                  "Check: clean bed with alcohol, ensure proper calibration, increase bed temperature to 60°C, use adhesion aids (hairspray, glue stick).",
              },
              {
                question: "How long does the printer last with active use?",
                answer:
                  "With proper care, the printer can work for years. Consumables: nozzle (6-12 months), glass bed (1-2 years), belts (2-3 years). Regular maintenance extends service life.",
              },
            ].map((faq, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Troubleshooting Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="bg-pink-100 text-pink-800">
              Troubleshooting
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Problem Solutions</h2>
            <p className="text-xl text-gray-600 max-w-[800px] mx-auto">Guide to solving the most common issues</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg text-red-600">Print Won't Stick</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="bg-red-50 p-3 rounded">
                    <h4 className="font-semibold text-sm text-red-900">Causes:</h4>
                    <ul className="text-sm text-red-800 mt-1 space-y-1">
                      <li>• Dirty bed</li>
                      <li>• Poor calibration</li>
                      <li>• Low bed temperature</li>
                      <li>• Too fast printing</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-3 rounded">
                    <h4 className="font-semibold text-sm text-green-900">Solutions:</h4>
                    <ul className="text-sm text-green-800 mt-1 space-y-1">
                      <li>• Clean bed with alcohol</li>
                      <li>• Recalibrate bed</li>
                      <li>• Increase temperature to 60°C</li>
                      <li>• Reduce first layer speed</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg text-red-600">Stringing and Blobs</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="bg-red-50 p-3 rounded">
                    <h4 className="font-semibold text-sm text-red-900">Causes:</h4>
                    <ul className="text-sm text-red-800 mt-1 space-y-1">
                      <li>• High temperature</li>
                      <li>• Slow printing</li>
                      <li>• Poor retraction settings</li>
                      <li>• Wet filament</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-3 rounded">
                    <h4 className="font-semibold text-sm text-green-900">Solutions:</h4>
                    <ul className="text-sm text-green-800 mt-1 space-y-1">
                      <li>• Lower temperature by 5-10°C</li>
                      <li>• Increase print speed</li>
                      <li>• Set retraction 6mm/25mm/s</li>
                      <li>• Dry filament</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg text-red-600">Nozzle Clogging</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="bg-red-50 p-3 rounded">
                    <h4 className="font-semibold text-sm text-red-900">Causes:</h4>
                    <ul className="text-sm text-red-800 mt-1 space-y-1">
                      <li>• Old filament</li>
                      <li>• Dust particles</li>
                      <li>• Wrong temperature</li>
                      <li>• Nozzle wear</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-3 rounded">
                    <h4 className="font-semibold text-sm text-green-900">Solutions:</h4>
                    <ul className="text-sm text-green-800 mt-1 space-y-1">
                      <li>• Blow out nozzle</li>
                      <li>• Clean with 0.4mm needle</li>
                      <li>• Check temperature</li>
                      <li>• Replace nozzle</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg text-red-600">Layer Separation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="bg-red-50 p-3 rounded">
                    <h4 className="font-semibold text-sm text-red-900">Causes:</h4>
                    <ul className="text-sm text-red-800 mt-1 space-y-1">
                      <li>• Low temperature</li>
                      <li>• Under-extrusion</li>
                      <li>• Too fast printing</li>
                      <li>• Drafts</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-3 rounded">
                    <h4 className="font-semibold text-sm text-green-900">Solutions:</h4>
                    <ul className="text-sm text-green-800 mt-1 space-y-1">
                      <li>• Increase temperature</li>
                      <li>• Adjust extrusion</li>
                      <li>• Reduce print speed</li>
                      <li>• Shield from drafts</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg text-red-600">Printer Noise</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="bg-red-50 p-3 rounded">
                    <h4 className="font-semibold text-sm text-red-900">Causes:</h4>
                    <ul className="text-sm text-red-800 mt-1 space-y-1">
                      <li>• Table vibration</li>
                      <li>• Bearing wear</li>
                      <li>• Belt tension</li>
                      <li>• Print speed</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-3 rounded">
                    <h4 className="font-semibold text-sm text-green-900">Solutions:</h4>
                    <ul className="text-sm text-green-800 mt-1 space-y-1">
                      <li>• Use dampeners</li>
                      <li>• Lubricate rails</li>
                      <li>• Adjust belts</li>
                      <li>• Reduce speed</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg text-red-600">Uneven Walls</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="bg-red-50 p-3 rounded">
                    <h4 className="font-semibold text-sm text-red-900">Causes:</h4>
                    <ul className="text-sm text-red-800 mt-1 space-y-1">
                      <li>• Printer vibrations</li>
                      <li>• Belt wear</li>
                      <li>• Uneven extrusion</li>
                      <li>• Filament quality</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-3 rounded">
                    <h4 className="font-semibold text-sm text-green-900">Solutions:</h4>
                    <ul className="text-sm text-green-800 mt-1 space-y-1">
                      <li>• Stabilize printer</li>
                      <li>• Replace belts</li>
                      <li>• Calibrate extruder</li>
                      <li>• Use quality filament</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Accessories Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="bg-pink-100 text-pink-800">
              Accessories & Upgrades
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Expand Your Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-[800px] mx-auto">
              Useful additions to improve print quality and ease of use
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Image
                  src="/placeholder.svg?height=200&width=300&text=Glass Beds"
                  alt="Glass beds"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold mb-2">Additional Build Plates</h3>
                <p className="text-sm text-gray-600 mb-3">Spare glass beds for quick swapping between prints</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold">$15</span>
                  <Button size="sm" asChild>
                    <Link href={amazonUrl} target="_blank">
                      Buy Now
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Image
                  src="/placeholder.svg?height=200&width=300&text=Nozzle Set"
                  alt="Nozzle set"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold mb-2">Nozzle Set</h3>
                <p className="text-sm text-gray-600 mb-3">Various diameter nozzles: 0.2, 0.3, 0.4, 0.6, 0.8, 1.0 mm</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold">$12</span>
                  <Button size="sm" asChild>
                    <Link href={amazonUrl} target="_blank">
                      Buy Now
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Image
                  src="/placeholder.svg?height=200&width=300&text=Printer Enclosure"
                  alt="Printer enclosure"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold mb-2">Protective Enclosure</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Acrylic enclosure for dust protection and temperature stabilization
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold">$89</span>
                  <Button size="sm" asChild>
                    <Link href={amazonUrl} target="_blank">
                      Buy Now
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Image
                  src="/placeholder.svg?height=200&width=300&text=Filament"
                  alt="Filament"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold mb-2">Filament Bundle</h3>
                <p className="text-sm text-gray-600 mb-3">PLA filament set - 10 colors, 100g each</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold">$45</span>
                  <Button size="sm" asChild>
                    <Link href={amazonUrl} target="_blank">
                      Buy Now
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Image
                  src="/placeholder.svg?height=200&width=300&text=Dampeners"
                  alt="Dampeners"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold mb-2">Noise Dampeners</h3>
                <p className="text-sm text-gray-600 mb-3">Rubber dampeners to reduce vibration and noise</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold">$8</span>
                  <Button size="sm" asChild>
                    <Link href={amazonUrl} target="_blank">
                      Buy Now
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Image
                  src="/placeholder.svg?height=200&width=300&text=Tool Kit"
                  alt="Tool kit"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold mb-2">Tool Kit</h3>
                <p className="text-sm text-gray-600 mb-3">Professional toolkit for printer maintenance and repair</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold">$25</span>
                  <Button size="sm" asChild>
                    <Link href={amazonUrl} target="_blank">
                      Buy Now
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Extended Reviews Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="bg-pink-100 text-pink-800">
              Detailed Reviews
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">In-Depth User Reviews</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <Badge variant="secondary">Verified Purchase</Badge>
                </div>
                <CardTitle className="text-lg">Excellent Printer for Beginners</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Bought this as my first 3D printer and I'm very happy with the choice. Assembly really took about 30
                  minutes, instructions are clear, all cables are labeled.
                </p>
                <p className="text-gray-600 mb-4">
                  First print succeeded on the first try - printed a calibration cube, quality is excellent.
                  Auto-leveling works like clockwork, no more struggling with adjustment screws.
                </p>
                <div className="bg-green-50 p-3 rounded-lg mb-4">
                  <h4 className="font-semibold text-green-900 mb-2">Pros:</h4>
                  <ul className="text-sm text-green-800 space-y-1">
                    <li>• Easy assembly</li>
                    <li>• Excellent print quality</li>
                    <li>• Auto-leveling</li>
                    <li>• Great price</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-3 rounded-lg">
                  <h4 className="font-semibold text-red-900 mb-2">Cons:</h4>
                  <ul className="text-sm text-red-800 space-y-1">
                    <li>• Somewhat noisy</li>
                    <li>• Plastic extruder</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center space-x-3">
                    <Image
                      src="/placeholder.svg?height=40&width=40"
                      alt="Michael S."
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div>
                      <p className="font-semibold">Michael S.</p>
                      <p className="text-sm text-gray-600">Engineer</p>
                    </div>
                  </div>
                  <div className="text-right text-sm text-gray-500">
                    <p>Using for 3 months</p>
                    <p>Helpful: 47 of 52</p>
                  </div>
                </div>
              </CardFooter>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(4)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <Star className="h-4 w-4 text-gray-300" />
                  </div>
                  <Badge variant="secondary">Verified Purchase</Badge>
                </div>
                <CardTitle className="text-lg">Good for Prototyping</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Using this for creating prototypes at work. Print quality is good enough for technical parts. I mainly
                  print PLA and ABS, both materials behave predictably.
                </p>
                <p className="text-gray-600 mb-4">
                  Downsides - sometimes need to adjust settings for different filaments. Also recommend buying spare
                  nozzles and glass beds right away.
                </p>
                <div className="bg-blue-50 p-3 rounded-lg mb-4">
                  <h4 className="font-semibold text-blue-900 mb-2">Tip for beginners:</h4>
                  <p className="text-sm text-blue-800">
                    Make sure to study slicer settings. Spend time on calibration - it pays off with quality prints in
                    the future.
                  </p>
                </div>
                <div className="bg-yellow-50 p-3 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">Recommendations:</h4>
                  <ul className="text-sm text-yellow-800 space-y-1">
                    <li>• Buy several types of filament right away</li>
                    <li>• Place printer on stable surface</li>
                    <li>• Keep bed clean</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center space-x-3">
                    <Image
                      src="/placeholder.svg?height=40&width=40"
                      alt="Anna V."
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div>
                      <p className="font-semibold">Anna V.</p>
                      <p className="text-sm text-gray-600">Designer</p>
                    </div>
                  </div>
                  <div className="text-right text-sm text-gray-500">
                    <p>Using for 8 months</p>
                    <p>Helpful: 32 of 41</p>
                  </div>
                </div>
              </CardFooter>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <Badge variant="secondary">Verified Purchase</Badge>
                </div>
                <CardTitle className="text-lg">Exceeded Expectations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Spent a long time choosing between different models, settled on Ender 3 V3 SE due to price-quality
                  ratio. Haven't regretted it for a second!
                </p>
                <p className="text-gray-600 mb-4">
                  In six months of use, I've printed over 200 models - from simple toys to complex mechanical parts.
                  Printer works stably, virtually no failures.
                </p>
                <div className="bg-green-50 p-3 rounded-lg mb-4">
                  <h4 className="font-semibold text-green-900 mb-2">Especially liked:</h4>
                  <ul className="text-sm text-green-800 space-y-1">
                    <li>• Reliability and stability</li>
                    <li>• Easy maintenance</li>
                    <li>• Large user community</li>
                    <li>• Parts availability</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">6-month results:</h4>
                  <div className="text-sm text-blue-800 space-y-1">
                    <p>• Printed: 200+ models</p>
                    <p>• Used: 8 kg filament</p>
                    <p>• Print failures: less than 5%</p>
                    <p>• Parts replaced: only nozzle</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center space-x-3">
                    <Image
                      src="/placeholder.svg?height=40&width=40"
                      alt="Vladimir K."
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div>
                      <p className="font-semibold">Vladimir K.</p>
                      <p className="text-sm text-gray-600">Enthusiast</p>
                    </div>
                  </div>
                  <div className="text-right text-sm text-gray-500">
                    <p>Using for 6 months</p>
                    <p>Helpful: 89 of 95</p>
                  </div>
                </div>
              </CardFooter>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(4)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <Star className="h-4 w-4 text-gray-300" />
                  </div>
                  <Badge variant="secondary">Verified Purchase</Badge>
                </div>
                <CardTitle className="text-lg">Good, But Has Some Issues</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Printer is decent, but there are things to consider. Assembly is really simple, but quality of some
                  plastic parts raises questions.
                </p>
                <p className="text-gray-600 mb-4">
                  After 2 months of use, extruder started squeaking, had to lubricate. Also recommend replacing plastic
                  guides with metal ones right away.
                </p>
                <div className="bg-yellow-50 p-3 rounded-lg mb-4">
                  <h4 className="font-semibold text-yellow-900 mb-2">What to improve:</h4>
                  <ul className="text-sm text-yellow-800 space-y-1">
                    <li>• Replace plastic extruder with metal one</li>
                    <li>• Install dampeners to reduce noise</li>
                    <li>• Add work area lighting</li>
                    <li>• Buy quality nozzles</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">Overall satisfied:</h4>
                  <p className="text-sm text-green-800">
                    Despite minor drawbacks, printer does its job. Hard to find anything better for this price.
                  </p>
                </div>
              </CardContent>
              <CardFooter>
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center space-x-3">
                    <Image
                      src="/placeholder.svg?height=40&width=40"
                      alt="Igor L."
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div>
                      <p className="font-semibold">Igor L.</p>
                      <p className="text-sm text-gray-600">Craftsman</p>
                    </div>
                  </div>
                  <div className="text-right text-sm text-gray-500">
                    <p>Using for 4 months</p>
                    <p>Helpful: 23 of 31</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Purchase Section */}
      <section className="py-20 bg-pink-600">
        <div className="container px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white">
              Ready to Start 3D Printing?
            </h2>
            <p className="text-xl text-pink-100">
              Order the Ender 3 V3 SE now on Amazon with fast shipping and quality guarantee
            </p>

            <div className="bg-white/10 backdrop-blur rounded-2xl p-8 max-w-md mx-auto">
              <div className="space-y-4">
                <div className="flex items-center justify-between text-white">
                  <span className="text-lg">Price:</span>
                  <div className="text-right">
                    <span className="text-2xl font-bold">$199</span>
                    <div className="text-sm text-pink-200 line-through">$265</div>
                  </div>
                </div>
                <div className="flex items-center justify-between text-white">
                  <span>Discount:</span>
                  <span className="text-green-300 font-semibold">-25%</span>
                </div>
                <div className="flex items-center justify-between text-white">
                  <span>Shipping:</span>
                  <span className="text-green-300">Free</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-white text-pink-600 hover:bg-gray-100 text-lg px-8 py-6">
                <Link href={amazonUrl} target="_blank" rel="noopener noreferrer">
                  Buy on Amazon
                  <ExternalLink className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-pink-600 text-lg px-8 py-6 bg-transparent"
              >
                Add to Wishlist
              </Button>
            </div>

            <div className="flex items-center justify-center space-x-8 text-sm text-pink-100">
              <div className="flex items-center space-x-2">
                <Truck className="h-5 w-5" />
                <span>1-2 Day Shipping</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5" />
                <span>Amazon Guarantee</span>
              </div>
              <div className="flex items-center space-x-2">
                <RotateCcw className="h-5 w-5" />
                <span>Easy Returns</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Printer className="h-8 w-8 text-pink-400" />
                <span className="text-2xl font-bold">3D Print Pro</span>
              </div>
              <p className="text-gray-400 max-w-xs">
                Your trusted source for 3D printer information and printing technologies.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Products</h3>
              <div className="space-y-2">
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                  3D Printers
                </Link>
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Filament
                </Link>
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Accessories
                </Link>
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Parts
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Support</h3>
              <div className="space-y-2">
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Guides
                </Link>
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                  FAQ
                </Link>
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Tech Support
                </Link>
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Warranty
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contact</h3>
              <div className="space-y-2">
                <p className="text-gray-400">Email: info@3dprintpro.com</p>
                <p className="text-gray-400">Phone: +1 (555) 123-4567</p>
                <p className="text-gray-400">Hours: 9:00-18:00 EST</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} 3D Print Pro. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
