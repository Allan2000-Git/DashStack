import { Button } from "@/components/ui/button"
import { Clipboard, Clock3, Download, X } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import * as Check from '@radix-ui/react-checkbox';

const items = [
  {
    name: "Invoice PDF",
    icon: <Download size={18} />
  },
  {
    name: "Receipt PDF",
    icon: <Download size={18} />
  }
]

function MyBookings() {
  return (
    <div className="w-full">
      <h1 className="text-gray-900 font-medium text-lg">My Bookings</h1>
      <div className="mt-5 flex flex-col gap-5 flex-wrap">
        <div className="w-full bg-white p-4 shadow-sm rounded-md flex items-start gap-5 lg:flex-row md:flex-col md:justify-start">
          <div className="text-gray-500 bg-gray-100 rounded-md p-4 lg:w-[5%] md:w-full flex items-center justify-center">
            <Clipboard />
          </div>
          <div className="flex-1 flex flex-col gap-3">
            <div className="flex items-center justify-between w-full flex-wrap">
              <h2 className="text-gray-900 font-medium text-md">Graphic design (full course)</h2>
              <div className="flex items-center gap-3">
                {
                  items.map((item, index) => (
                    <Button
                    variant="outline" 
                    className="flex items-center gap-3 border-gray-300 shadow-sm"
                    key={index}>
                      {item.icon}
                      {item.name}
                    </Button>
                  ))
                }
              </div>
            </div>
            <div className="flex items-center gap-8 flex-wrap">
              <div>
                <span className="bookings_secondary_heading">Subject</span>
                <p className="bookings_secondary_content">Design for intermediates - L1</p>
              </div>
              <div>
                <span className="bookings_secondary_heading">Sessions</span>
                <p className="bookings_secondary_content">10 Sessions</p>
              </div>
              <div>
                <span className="bookings_secondary_heading">Invoice</span>
                <p className="bookings_secondary_content">13</p>
              </div>
              <div>
                <span className="bookings_secondary_heading">Valid till</span>
                <p className="bookings_secondary_content">Feb 15, 2024 (23 days left)</p>
              </div>
            </div>
            <div className="bg-gray-100 p-4 rounded-md flex flex-col gap-1.5 flex-wrap">
                <div className="flex flex-col gap-1">
                  <p className="bookings_secondary_content text-gray-900">Balance <span className="font-semibold">6</span></p>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 11 }, (_, index) => (
                      <Checkbox className="border-gray-300 bg-white" key={index} />
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="bookings_secondary_content text-gray-900">Scheduled <span className="font-semibold">3</span></p>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 3 }, (_, index) => (
                      <div 
                      key={index}
                      className="border border-gray-300 rounded-sm p-[3px]"
                      >
                        <Clock3 size={10} />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="bookings_secondary_content text-green-700">Attended <span className="font-semibold">5</span></p>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 4 }, (_, index) => (
                      <Checkbox defaultChecked={true} className="border-green-300 bg-green-100 data-[state=checked]:text-green-700 data-[state=checked]:bg-transparent" key={index} />
                    ))}
                    <div
                    className="border border-red-300 bg-red-100 text-red-700 rounded-sm"
                    >
                      <X size={15} />
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyBookings
