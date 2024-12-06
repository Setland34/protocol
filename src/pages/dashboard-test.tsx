export default function DashboardMockup() {
  return (
    <div className="min-h-screen bg-[#0C1013] text-[#FFFFFF]">
      {/* Header */}
      <div className="border-b border-[#32383D] p-4">
        <h1 className="text-2xl font-bold">API Dashboard</h1>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row">
        {/* Tab Navigation */}
        <nav className="md:w-64 md:border-r border-[#32383D] p-4">
          <div className="flex md:flex-col">
            <button className="p-2 rounded md:w-full md:mb-2 mr-2 md:mr-0 bg-[#252A2E] text-[#FFFFFF]">
              Overview
            </button>
            <button className="p-2 rounded md:w-full md:mb-2 mr-2 md:mr-0 hover:bg-[#32383D]">
              Analytics
            </button>
            <button className="p-2 rounded md:w-full md:mb-2 mr-2 md:mr-0 hover:bg-[#32383D]">
              Buy Credits
            </button>
          </div>
        </nav>
        {/* Tab Content Area */}
        <div className="flex-1 p-4">
          {/* Overview Tab Content */}
          <div className="space-y-6">
            {/* API Key Section */}
            <div className="border border-[#32383D] rounded p-4">
              <div className="font-bold mb-2">Your API Key</div>
              <code className="bg-[#252A2E] text-[#FFFFFF] p-2 rounded block mt-2">
                f56d9d54-1b7b-4349-9c0f-8ec7e106e28f
              </code>
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap justify-center space-x-4 space-y-2 md:space-y-0">
              <a href="#" className="px-4 py-2 bg-[#A387FF] text-[#FFFFFF] rounded hover:bg-[#32383D] flex-1 md:flex-none">
                Quickstart
              </a>
              <a href="#" className="px-4 py-2 bg-[#252A2E] rounded hover:bg-[#32383D] flex-1 md:flex-none">
                Use with Agents & LLMs
              </a>
              <a href="#" className="px-4 py-2 bg-[#252A2E] rounded hover:bg-[#32383D] flex-1 md:flex-none">
                Pricing
              </a>
              <a href="#" className="px-4 py-2 bg-[#252A2E] rounded hover:bg-[#32383D] flex-1 md:flex-none">
                Sandbox
              </a>
            </div>

            {/* Stats Preview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border border-[#32383D] rounded p-4">
                <div className="text-sm text-[#C7D2DA]">Credits Remaining</div>
                <div className="text-xl font-bold">9,697</div>
              </div>
              <div className="border border-[#32383D] rounded p-4">
                <div className="text-sm text-[#C7D2DA]">Requests Today</div>
                <div className="text-xl font-bold">245</div>
              </div>
              <div className="border border-[#32383D] rounded p-4">
                <div className="text-sm text-[#C7D2DA]">Cost Today</div>
                <div className="text-xl font-bold">$0.25</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}