import './App.css';

function App() {
  return (
  <>  
    <div className="mx-24 py-6 px-4 font-sans">
      <div className="flex mb-8 justify-between items-center">
        <div className="flex flex-wrap">
          <div className="w-32 mb-1 flex flex-col">
            <label className="w-32 text-blue-200 block font-bold text-lg tracking-wide">Order Date</label>
            <p className="inline-block">Feb 15, 2022</p>
          </div>

          <div className="w-34 mb-1 flex flex-col">
            <label className="w-34 text-blue-200 block font-bold text-lg tracking-wide">Order Number</label>
            <p className="inline-block">140401</p>
          </div>
        </div>

        <div className="mb-1 overflow-hidden relative">
          <div className="w-full cursor-pointer flex items-center justify-center">
            <svg width="164" height="133" viewBox="0 0 64 33" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.4111 22.4839C8.64755 24.4644 7.67502 27.025 7.67914 29.6769C7.68377 27.0262 6.71276 24.4665 4.95117 22.4859C5.84226 22.7157 6.75887 22.8317 7.67914 22.8309C8.6008 22.831 9.51876 22.7144 10.4111 22.4839Z" fill="#8DD454"/>
              <path d="M7.67984 13.284C9.96741 13.284 11.8219 11.4296 11.8219 9.142C11.8219 6.85444 9.96741 5 7.67984 5C5.39228 5 3.53784 6.85444 3.53784 9.142C3.53784 11.4296 5.39228 13.284 7.67984 13.284Z" fill="#FFE600"/>
              <path d="M15.359 12.1289V14.7549C15.3594 15.8778 15.0775 16.9828 14.5393 17.9683C14.0011 18.9538 13.2239 19.7883 12.279 20.395C12.092 20.515 11.899 20.6259 11.7 20.7279C10.9159 21.1286 10.06 21.3696 9.18201 21.437C9.03867 21.4483 8.89399 21.4549 8.74799 21.4569H8.65698V19.3289H8.75098L8.67499 19.3139C8.66399 19.1529 8.65796 18.9899 8.65796 18.8259C8.65746 17.3446 9.14789 15.9049 10.0526 14.7319C10.9572 13.5589 12.2251 12.7188 13.658 12.343C14.0439 12.2412 14.4381 12.1743 14.836 12.1429C15.006 12.1289 15.182 12.1289 15.359 12.1289Z" fill="#8DD454"/>
              <path d="M3.3796e-07 12.1289V14.7549C-0.000356277 15.8778 0.281517 16.9828 0.819703 17.9683C1.35789 18.9538 2.13514 19.7883 3.08002 20.395C3.26702 20.515 3.46 20.6259 3.659 20.7279C4.44313 21.1286 5.29901 21.3696 6.177 21.437C6.32034 21.4483 6.46502 21.4549 6.61102 21.4569H6.70203V19.3289H6.60797L6.68402 19.3139C6.69502 19.1529 6.70203 18.9899 6.70203 18.8259C6.70253 17.3446 6.2121 15.9049 5.30743 14.7319C4.40277 13.5589 3.13487 12.7188 1.70203 12.343C1.31612 12.2413 0.921836 12.1743 0.523987 12.1429C0.351987 12.1289 0.177 12.1289 3.3796e-07 12.1289Z" fill="#8DD454"/>
              <path d="M22.9919 22.62C23.6852 23.3307 24.5259 23.686 25.5139 23.686C26.5019 23.686 27.3339 23.3307 28.0099 22.62C28.7032 21.9093 29.0499 20.9213 29.0499 19.656C29.0499 18.408 28.7032 17.4373 28.0099 16.744C27.3339 16.0333 26.5019 15.678 25.5139 15.678C24.5259 15.678 23.6852 16.0333 22.9919 16.744C22.3159 17.4373 21.9779 18.408 21.9779 19.656C21.9779 20.904 22.3159 21.892 22.9919 22.62ZM25.5139 12.948C27.4206 12.948 28.9892 13.5807 30.2199 14.846C31.4679 16.1113 32.0919 17.7147 32.0919 19.656C32.0919 21.5973 31.4679 23.2093 30.2199 24.492C28.9892 25.7573 27.4206 26.39 25.5139 26.39C23.6246 26.39 22.0559 25.7573 20.8079 24.492C19.5772 23.2093 18.9619 21.5973 18.9619 19.656C18.9619 17.7147 19.5772 16.1113 20.8079 14.846C22.0559 13.5807 23.6246 12.948 25.5139 12.948ZM32.0685 22.568L34.6945 21.84C34.7465 22.4467 34.9979 22.958 35.4485 23.374C35.8992 23.79 36.5059 23.998 37.2685 23.998C37.8579 23.998 38.3172 23.8593 38.6465 23.582C38.9932 23.3047 39.1665 22.958 39.1665 22.542C39.1665 21.814 38.6725 21.346 37.6845 21.138L35.8125 20.722C34.7205 20.4793 33.8799 20.0287 33.2905 19.37C32.7012 18.7113 32.4065 17.9313 32.4065 17.03C32.4065 15.9207 32.8572 14.9673 33.7585 14.17C34.6599 13.3553 35.7605 12.948 37.0605 12.948C37.8925 12.948 38.6292 13.0693 39.2705 13.312C39.9119 13.5547 40.4059 13.8753 40.7525 14.274C41.1165 14.6553 41.3939 15.028 41.5845 15.392C41.7752 15.756 41.8965 16.12 41.9485 16.484L39.4005 17.212C39.3312 16.7267 39.1059 16.2933 38.7245 15.912C38.3605 15.5133 37.8059 15.314 37.0605 15.314C36.5405 15.314 36.1072 15.4613 35.7605 15.756C35.4139 16.0333 35.2405 16.3713 35.2405 16.77C35.2405 17.4807 35.6652 17.9227 36.5145 18.096L38.4385 18.486C39.6172 18.746 40.5185 19.214 41.1425 19.89C41.7665 20.566 42.0785 21.3807 42.0785 22.334C42.0785 23.3913 41.6539 24.336 40.8045 25.168C39.9725 25.9827 38.8025 26.39 37.2945 26.39C36.4279 26.39 35.6479 26.26 34.9545 26C34.2785 25.74 33.7412 25.4107 33.3425 25.012C32.9612 24.596 32.6579 24.1887 32.4325 23.79C32.2245 23.374 32.1032 22.9667 32.0685 22.568ZM46.2394 26H43.2494V13.338H46.2394V26ZM47.1922 22.568L49.8182 21.84C49.8702 22.4467 50.1215 22.958 50.5722 23.374C51.0229 23.79 51.6295 23.998 52.3922 23.998C52.9815 23.998 53.4409 23.8593 53.7702 23.582C54.1169 23.3047 54.2902 22.958 54.2902 22.542C54.2902 21.814 53.7962 21.346 52.8082 21.138L50.9362 20.722C49.8442 20.4793 49.0035 20.0287 48.4142 19.37C47.8249 18.7113 47.5302 17.9313 47.5302 17.03C47.5302 15.9207 47.9809 14.9673 48.8822 14.17C49.7835 13.3553 50.8842 12.948 52.1842 12.948C53.0162 12.948 53.7529 13.0693 54.3942 13.312C55.0355 13.5547 55.5295 13.8753 55.8762 14.274C56.2402 14.6553 56.5175 15.028 56.7082 15.392C56.8989 15.756 57.0202 16.12 57.0722 16.484L54.5242 17.212C54.4549 16.7267 54.2295 16.2933 53.8482 15.912C53.4842 15.5133 52.9295 15.314 52.1842 15.314C51.6642 15.314 51.2309 15.4613 50.8842 15.756C50.5375 16.0333 50.3642 16.3713 50.3642 16.77C50.3642 17.4807 50.7889 17.9227 51.6382 18.096L53.5622 18.486C54.7409 18.746 55.6422 19.214 56.2662 19.89C56.8902 20.566 57.2022 21.3807 57.2022 22.334C57.2022 23.3913 56.7775 24.336 55.9282 25.168C55.0962 25.9827 53.9262 26.39 52.4182 26.39C51.5515 26.39 50.7715 26.26 50.0782 26C49.4022 25.74 48.8649 25.4107 48.4662 25.012C48.0849 24.596 47.7815 24.1887 47.5562 23.79C47.3482 23.374 47.2269 22.9667 47.1922 22.568ZM61.363 26H58.373V13.338H61.363V26Z" fill="#10394D"/>
              <path d="M45.4064 6.99976L48.0053 7.02574L45.9754 11H43.2676L45.4064 6.99976Z" fill="#10394D"/>
              <path d="M60.5316 7L63.1306 7.02599L61.1006 11.0003H58.3928L60.5316 7Z" fill="#10394D"/>
            </svg>							  
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-between mb-8">
        <div className="w-1/3">
          <label className="text-blue-200 block mb-1 font-bold text-lg tracking-wide border-b-2 border-green pb-2">Vendor Details</label>
          <div className="mb-1 flex items-baseline">
            <label className="w-36 text-blue-200 block font-bold text-lg tracking-wide">Name</label>
            <div className="flex-1">
              <p className="py-2 px-4 text-gray leading-tight">AFEX Nigeria Limited</p>
            </div>
          </div>

          <div className="mb-1 flex items-baseline">
            <label className="w-36 text-blue-200 block font-bold text-lg tracking-wide">Address</label>
            <div className="flex-1">
              <p className="py-2 px-4 text-gray leading-tight">3rd Floor, Yobe Investment House</p>
            </div>
          </div>

          <div className="mb-1 flex items-baseline">
            <label className="w-36 text-blue-200 block font-bold text-lg tracking-wide">TIN No.</label>
            <div className="flex-1">
              <p className="py-2 px-4 text-gray leading-tight">140401</p>
            </div>
          </div>
        </div>

        <div className="w-1/3">
          <label className="text-blue-200 block mb-1 font-bold text-lg tracking-wide border-b-2 border-green pb-2">Contact Details</label>
          <div className="mb-1 flex items-baseline">
            <label className="w-36 text-blue-200 block font-bold text-lg tracking-wide">Name</label>
            <div className="flex-1">
              <p className="py-2 px-4 text-gray leading-tight">Agricorp Food & Spices Unit</p>
            </div>
          </div>

          <div className="mb-1 flex items-baseline">
            <label className="w-36 text-blue-200 block font-bold text-lg tracking-wide">Contact Person</label>
            <div className="flex-1">
              <p className="py-2 px-4 text-gray leading-tight">John Chukwuma</p>
            </div>
          </div>

          <div className="mb-1 flex items-baseline">
            <label className="w-36 text-blue-200 block font-bold text-lg tracking-wide">Phone No</label>
            <div className="flex-1">
              <p className="py-2 px-4 text-gray leading-tight">+234-847-489-3992</p>
            </div>
          </div>
          
          <div className="mb-1 flex items-baseline">
            <label className="w-36 text-blue-200 block font-bold text-lg tracking-wide">Email</label>
            <div className="flex-1">
              <p className="py-2 px-4 text-gray leading-tight">john.chukwuma@onecapital.ae</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-between mb-8">
        <div className="w-1/3">
          <label className="text-blue-200 block mb-1 font-bold text-lg tracking-wide border-b-2 border-green pb-2">Invoice Address</label>
          <div className="mb-1 flex items-baseline">
            <label className="w-36 text-blue-200 block font-bold text-lg tracking-wide">Name</label>
            <div className="flex-1">
              <p className="py-2 px-4 text-gray leading-tight">Agricorp International Development Limited</p>
            </div>
          </div>

          <div className="mb-1 flex items-baseline">
            <label className="w-36 text-blue-200 block font-bold text-lg tracking-wide">Email</label>
            <div className="flex-1">
              <p className="py-2 px-4 text-gray leading-tight">account@agricorpinternational.com</p>
            </div>
          </div>

          <div className="mb-1 flex items-baseline">
            <label className="w-36 text-blue-200 block font-bold text-lg tracking-wide">Payment Term</label>
            <div className="flex-1">
              <p className="py-2 px-4 text-gray leading-tight">Payment within 7 days after delivery or pickup</p>
            </div>
          </div>
        </div>

        <div className="w-1/3">
          <label className="text-blue-200 block mb-1 font-bold text-lg tracking-wide border-b-2 border-green pb-2">Delivery Details</label>
          <div className="mb-1 flex items-baseline">
            <label className="w-36 text-blue-200 block font-bold text-lg tracking-wide">Name</label>
            <div className="flex-1">
              <p className="py-2 px-4 text-gray leading-tight">Agricorp International Development Limited</p>
            </div>
          </div>

          <div className="mb-1 flex items-baseline">
            <label className="w-36 text-blue-200 block font-bold text-lg tracking-wide">Address</label>
            <div className="flex-1">
              <p className="py-2 px-4 text-gray leading-tight">Agricorp Kubacha, Kaduna, Nigeria</p>
            </div>
          </div>

          <div className="mb-1 flex items-baseline">
            <label className="w-36 text-blue-200 block font-bold text-lg tracking-wide">Delivery Term</label>
            <div className="flex-1">
              <p className="py-2 px-4 text-gray leading-tight">Delivered within 3 days of Agricorp delivery request</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex -mx-1 bg-blue-100 py-2 items-center">
        <div className="flex-1 px-1 pl-3">
          <span className="text-blue-200 tracking-wide text-lg font-bold mr-8">Serial No.</span>
          <span className="text-blue-200 tracking-wide text-lg font-bold">Material</span>
        </div>

        <div className="px-1 w-48 text-left">
          <p className="text-blue-200 tracking-wide text-lg font-bold">Quantity UoM(MT)</p>
        </div>

        <div className="px-1 w-32 text-left">
          <p className="leading-none">
            <span className="block tracking-wide text-lg font-bold text-blue-200">Price/UoM</span>
          </p>
        </div>

        <div className="px-1 w-40 text-left">
          <p className="leading-none">
            <span className="block tracking-wide text-lg font-bold text-blue-200">Total Value(N)</span>
          </p>
        </div>

        <div className="px-1 w-20 text-center">
        </div>
      </div>

      <span>
        <div className="flex -mx-1 py-2">
          <div className="flex-1 px-1 pl-3">
            <span className="text-blue-200 mr-24">01</span>
            <span className="text-blue-200">Procurement and storage of 2000MT of Maize</span>
          </div>

          <div className="px-1 w-56 text-left">
            <p className="text-blue-200">500</p>
          </div>

          <div className="px-1 w-32 text-left">
            <p className="text-blue-200">10</p>
          </div>

          <div className="px-1 w-32 text-left">
            <p className="text-blue-200">5000</p>
          </div>

          <div className="px-1 w-20 text-left">
            <a href="#" className="text-lg font-semibold"></a>
          </div>
        </div>
      </span>

      <span>
        <div className="flex -mx-1 py-2">
          <div className="flex-1 px-1 pl-3">
            <span className="text-blue-200 mr-24">02</span>
            <span className="text-blue-200">Procurement and storage of 2000MT of Maize</span>
          </div>

          <div className="px-1 w-56 text-left">
            <p className="text-blue-200">500</p>
          </div>

          <div className="px-1 w-32 text-left">
            <p className="text-blue-200">10</p>
          </div>

          <div className="px-1 w-32 text-left">
            <p className="text-blue-200">5000</p>
          </div>

          <div className="px-1 w-20 text-left">
            <a href="#" className="text-lg font-semibold"></a>
          </div>
        </div>
      </span>

      <span>
        <div className="flex -mx-1 py-2">
          <div className="flex-1 px-1 pl-3">
            <span className="text-blue-200 mr-28"></span>
            <span className="text-blue-200 font-bold">Total</span>
          </div>

          <div className="px-1 w-56 text-left">
            <p className="text-blue-200">12000</p>
          </div>

          <div className="px-1 w-32 text-left">
            <p className="text-blue-200 font-bold">266,000</p>
          </div>

          <div className="px-1 w-32 text-left">
            <p className="text-gray-800 font-bold">742,000,000</p>
          </div>

          <div className="px-1 w-20 text-left">
            <p className="text-sm font-semibold"></p>
          </div>
        </div>
      </span>
    

      <div className='mt-3'>
        <p className='font-bold'>NB:</p>
        <p className="py-2 text-gray leading-tight">Delivery Shall be invoiced separately</p>
        <p className="py-2 text-gray leading-tight">One month assumed for storage</p>
      </div>

      <div className='mt-3'>
        <p className='font-bold'>Safety Tips:</p>
        <p className="py-2 text-gray leading-tight">Your safety, your responsibility</p>
        <p className="py-2 text-gray leading-tight">Use PPEs as applicable in the work permit e.g. Googles, earmuffs and safety handgloves etc.</p>
      </div>

      <div className='mt-3'>
        <p className='font-bold'>COVID-19 Prevention Tips:</p>
        <p className="py-2 text-gray leading-tight">1. Wash your hands/ sanitize with alcohol-based sanitizer</p>
        <p className="py-2 text-gray leading-tight">2. Use your nose mask</p>
        <p className="py-2 text-gray leading-tight">3. Maintain physical / social distancing</p>
      </div>

      <div className='mt-16'>
        <span className='font-bold mr-24'> User Team Signature.................................................</span>
        <span className='font-bold'>Date .........................................................</span>
      </div>

      <div className='flex justify-between mt-16'>
        <p className='font-bold'> 
        <span>Authorization Signature ..........................................</span>
        <span className='mx-24'>Date .........................................................</span> 
        <span>Total PO Value(N) 742,000,000</span>
        </p>
      </div>

      <div className='mt-16'>
        <p className="py-2 text-gray leading-tight">1. An invoice and delivery note without reference to a Purchase Order will not be accepted by Agricorp.</p>
        <p className="py-2 text-gray leading-tight">2. The invoice should indicate the number of delivery note.</p>
        <p className="py-2 text-gray leading-tight">3. The invoice should indicate the Tax Identification Number of the Supplier.</p>
        <p className="py-2 text-gray leading-tight">4. The above Purchase Order excludes VAT and WHT. Taxes should be added/deducted at the point of invoicing.</p>
        <p className="py-2 text-gray leading-tight">5. Agricorp reserves the right to make any subsequent correction on this Purchase Order should it discover an error or ommision on it.</p>
        <p className="py-2 text-gray-700 leading-tight">6. Agricorp will not be bound to recieve the Product/Services contained in this Purchase Order except it passes any required quality inspection or certification.</p>
        <p className="py-2 text-gray-700 leading-tight">7. All our orders and purchases are subject to the General Condition of Purchase and Code of Business Conduct, this is available on request from the purchasing unit.</p>
        <p className="py-2 text-gray-700 leading-tight">8. PO is valid only if it is recieved from Agricorp's accounting unit email, which is accounts@agricorpinternational.com.</p>
        <p className="py-2 text-gray-700 leading-tight">9. Internet communications are not secure and therefore Agricorp does not accept legal responsibility for POs recieved due to breach in internt safety.</p>
      </div>
    </div>
  </>
  );
}

export default App;
