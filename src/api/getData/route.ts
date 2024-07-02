"use server";

import { NextResponse } from "next/server";
import {client} from '@/lib/clientSetup';


export async function GET() {
    const entries = await client.getEntries();
  
    console.log(entries.items);
  
    return NextResponse.json({
      props: {
        entries: entries.items,
      },
    });
  }