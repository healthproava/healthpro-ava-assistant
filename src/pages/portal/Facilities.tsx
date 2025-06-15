
import React from "react";
import { useAllFacilities } from "@/hooks/useFacilities";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";

const FacilitiesDirectory = () => {
  const { data: facilities, isLoading, isError } = useAllFacilities();

  return (
    <div className="px-4 py-8 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Facilities Directory</h1>

      {isLoading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <Skeleton key={i} className="h-40 rounded-xl" />
          ))}
        </div>
      )}

      {isError && (
        <div className="text-red-600">Failed to load facilities. Please try again.</div>
      )}

      {!isLoading && facilities?.length === 0 && (
        <div className="text-gray-500">No facilities found.</div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {facilities &&
          facilities.map(facility => (
            <Card key={facility.id} className="p-6 flex flex-col justify-between">
              <div>
                <div className="font-bold text-hpa-dark text-lg">{facility.name}</div>
                <div className="text-hpa-blue text-sm">{facility.type}</div>
                <div className="text-gray-700 mt-2">{facility.address}</div>
                <div className="text-gray-500 text-sm">
                  {facility.city}, {facility.state} {facility.zip_code}
                </div>
                {facility.rating ? (
                  <div className="mt-2 text-yellow-500 text-md font-medium">
                    Rating: {facility.rating}
                  </div>
                ) : (
                  <div className="mt-2 text-gray-400 text-sm">No rating info</div>
                )}
              </div>

              {facility.phone && (
                <a
                  className="mt-4 text-blue-500 hover:underline text-sm"
                  href={`tel:${facility.phone}`}
                >
                  Call: {facility.phone}
                </a>
              )}
            </Card>
          ))}
      </div>
    </div>
  );
};

export default FacilitiesDirectory;
