import React from 'react'


export default function AppointmentAccordion() {
  return (
    <div>
     <div class="relative mx-auto w-full py-16 px-5 font-sans text-gray-800 sm:px-20 md:max-w-screen-lg lg:py-24">
  <h2 class="mb-5 text-center font-sans text-4xl sm:text-5xl font-bold">Frequently asked Questions</h2>
  <p class="mb-12 text-center text-lg text-gray-600">We have written down answers to some of the frequently asked questions. But, if you still have any queries, feel free to contact us.</p>
  <ul class="space-y-4">
    <li class="text-left">
      <label for="accordion-1" class="relative flex flex-col rounded-md border border-gray-100 shadow-md">
        <input class="peer hidden" type="checkbox" id="accordion-1" checked />
        <svg xmlns="http://www.w3.org/2000/svg" class="absolute right-0 top-4 ml-auto mr-5 h-4 text-gray-500 transition peer-checked:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
        <div class="relative ml-4 cursor-pointer select-none items-center py-4 pr-12">
          <h3 class="text-sm text-gray-600 lg:text-base">How do I book an appointment for electrical services?</h3>
        </div>
        <div class="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-96">
          <div class="p-5">
            <p class="text-sm">You can book an appointment by visiting our website and filling out the appointment booking form. Select the service you need, choose a convenient time slot, and provide your contact information. Once submitted, our team will confirm your appointment via email or phone.</p>
          </div>
        </div>
      </label>
    </li>

    <li class="text-left">
      <label for="accordion-2" class="relative flex flex-col rounded-md border border-gray-100 shadow-md">
        <input class="peer hidden" type="checkbox" id="accordion-2" />
        <svg xmlns="http://www.w3.org/2000/svg" class="absolute right-0 top-4 ml-auto mr-5 h-4 text-gray-500 transition peer-checked:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
        <div class="relative ml-4 cursor-pointer select-none items-center py-4 pr-12">
          <h3 class="text-sm text-gray-600 lg:text-base">What information do I need to provide when booking an appointment?</h3>
        </div>
        <div class="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-96">
          <div class="p-5">
            <p class="text-sm">When booking an appointment, you'll need to provide your name, contact information, address, and details about the service you require. This helps us prepare and ensure we bring the right tools and equipment.</p>
          </div>
        </div>
      </label>
    </li>

    <li class="text-left">
      <label for="accordion-3" class="relative flex flex-col rounded-md border border-gray-100 shadow-md">
        <input class="peer hidden" type="checkbox" id="accordion-3" />
        <svg xmlns="http://www.w3.org/2000/svg" class="absolute right-0 top-4 ml-auto mr-5 h-4 text-gray-500 transition peer-checked:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
        <div class="relative ml-4 cursor-pointer select-none items-center py-4 pr-12">
          <h3 class="text-sm text-gray-600 lg:text-base">Can I reschedule or cancel my appointment?</h3>
        </div>
        <div class="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-96">
          <div class="p-5">
            <p class="text-sm">Yes, you can reschedule or cancel your appointment. Please contact us at least 24 hours in advance to make any changes to your booking. You can do this by calling our customer service or through the reschedule/cancel option on our website.</p>
          </div>
        </div>
      </label>
    </li>

    <li class="text-left">
      <label for="accordion-4" class="relative flex flex-col rounded-md border border-gray-100 shadow-md">
        <input class="peer hidden" type="checkbox" id="accordion-4" />
        <svg xmlns="http://www.w3.org/2000/svg" class="absolute right-0 top-4 ml-auto mr-5 h-4 text-gray-500 transition peer-checked:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
        <div class="relative ml-4 cursor-pointer select-none items-center py-4 pr-12">
          <h3 class="text-sm text-gray-600 lg:text-base">Is there a service charge for booking an appointment?</h3>
        </div>
        <div class="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-96">
          <div class="p-5">
            <p class="text-sm">No, there is no additional service charge for booking an appointment. You will only be charged for the electrical services provided as per our pricing list.</p>
          </div>
        </div>
      </label>
    </li>
  </ul>
  <div class="mt-20 flex justify-center">
    <a class="inline-flex cursor-pointer rounded-lg bg-blue-500 py-3 px-5 text-lg text-white" href="#">Still have questions?</a>
  </div>
</div>

    </div>
  )
}
