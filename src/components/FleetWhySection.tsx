import { brands, comparison } from "../data/landingContent";
import { publicUrl } from "../utils/publicUrl";
import { MaterialIcon } from "./ui/MaterialIcon";

export function FleetWhySection() {
  return (
    <section
      id="why-wheely"
      className="bg-wheely-support px-4 py-16 text-neutral-100 sm:px-6 lg:py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-3 lg:items-start lg:gap-10 xl:gap-12">
          {/* Why Wheely — 2/3 */}
          <div className="min-w-0 lg:col-span-2">
            <div className="mb-8 space-y-3 text-left">
              <h2 className="font-headline text-3xl font-black text-white sm:text-4xl lg:text-5xl">
                {comparison.title}
              </h2>
              <p className="text-base text-neutral-300 sm:text-lg">
                {comparison.subtitle}
              </p>
            </div>
            <div className="-mx-1 overflow-x-auto">
              <table className="w-full min-w-[520px] border-collapse text-left text-sm sm:min-w-0 sm:text-base">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-3 pr-2 text-sm font-bold text-white sm:py-4 sm:text-base">
                      Features
                    </th>
                    <th className="py-3 px-1 text-sm font-black text-primary-container sm:py-4 sm:text-base lg:text-lg">
                      Wheely
                    </th>
                    <th className="py-3 px-1 text-xs font-medium text-neutral-400 sm:py-4 sm:text-sm">
                      Leasing
                    </th>
                    <th className="py-3 pl-1 text-xs font-medium text-neutral-400 sm:py-4 sm:text-sm">
                      Ownership
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {comparison.rows.map((row) => (
                    <tr key={row.feature}>
                      <td className="py-3 pr-2 text-neutral-200 sm:py-4">
                        {row.feature}
                      </td>
                      <td className="py-3 px-1 text-primary-container sm:py-4">
                        {"wheelyKind" in row && row.wheelyKind === "check" ? (
                          <MaterialIcon
                            name="check_circle"
                            className="text-primary-container"
                          />
                        ) : (
                          <span className="font-bold text-primary-container">
                            {"wheely" in row ? row.wheely : ""}
                          </span>
                        )}
                      </td>
                      <td className="py-3 px-1 text-neutral-400 sm:py-4">
                        {row.leasing}
                      </td>
                      <td className="py-3 pl-1 text-neutral-400 sm:py-4">
                        {row.ownership}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Fleet — 1/3, 3×3 logos */}
          <div className="min-w-0 lg:col-span-1">
            <div className="mb-6 flex flex-col justify-between gap-3 sm:mb-8 lg:flex-col lg:items-stretch">
              <h2 className="font-headline text-2xl font-bold tracking-tight text-white sm:text-3xl">
                {brands.title}
              </h2>
              <a
                href="#cars"
                className="mt-1 flex w-fit shrink-0 items-center gap-1 text-sm font-bold text-primary-container hover:underline underline-offset-8 sm:text-base"
              >
                {brands.browseLink}
                <MaterialIcon
                  name="open_in_new"
                  className="text-sm text-primary-container"
                />
              </a>
            </div>
            <div className="grid grid-cols-3 grid-rows-3 gap-2 sm:gap-3">
              {brands.items.map((item) => (
                <div
                  key={item.name}
                  className="flex min-h-[5.5rem] items-center justify-center rounded-xl border border-white/10 bg-white p-4 transition-all hover:border-primary-container hover:shadow-md sm:min-h-[6.5rem] sm:p-5"
                >
                  <img
                    src={publicUrl(item.logo)}
                    alt={item.name}
                    className="max-h-20 w-full max-w-[200px] object-contain sm:max-h-24"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
