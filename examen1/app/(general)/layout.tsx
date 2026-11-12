'use client'

import ProviderPresupuesto from "../Provider/ProviderPresupuesto";



export default function LayoutProducto({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <div>


            <ProviderPresupuesto>

                {children}
            </ProviderPresupuesto>


        </div>
    );
}