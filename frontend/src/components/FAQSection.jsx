import React from 'react'

export default function FAQSection() {
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
          <h3 class="text-sm text-gray-600 lg:text-base">What types of electrical services do you offer?</h3>
        </div>
        <div class="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-96">
          <div class="p-5">
            <p class="text-sm">We offer a wide range of electrical services, including wiring and rewiring, circuit breaker repairs, lighting installation, electrical panel upgrades, outlet and switch repairs, and more. Whether it's a residential, commercial, or industrial project, our skilled electricians can handle it.</p>
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
          <h3 class="text-sm text-gray-600 lg:text-base">Are your electricians licensed and insured?</h3>
        </div>
        <div class="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-96">
          <div class="p-5">
            <p class="text-sm">Yes, all our electricians are fully licensed, insured, and certified to perform electrical work. We prioritize safety and ensure that all work complies with local codes and regulations.</p>
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
          <h3 class="text-sm text-gray-600 lg:text-base"> Do you offer emergency electrical services?</h3>
        </div>
        <div class="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-96">
          <div class="p-5">
            <p class="text-sm">Yes, we offer 24/7 emergency electrical services. If you're experiencing an urgent issue like a power outage, electrical fire, or any other electrical emergency, contact us immediately, and we'll dispatch a technician to assist you as soon as possible.</p>
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
          <h3 class="text-sm text-gray-600 lg:text-base">Do you provide warranties on your work?</h3>
        </div>
        <div class="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-96">
          <div class="p-5">
            <p class="text-sm">Yes, we stand behind the quality of our work and offer warranties on both our labor and the materials we use. Specific warranty details will be provided to you at the time of service.</p>
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
