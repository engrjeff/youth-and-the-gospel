"use client";

import { createSheetData } from "@/actions/createSheetData";
import Checkbox from "./Checkbox";
import FormControl from "./FormControl";
import FormDescription from "./FormDescription";
import Input from "./Input";
import Label from "./Label";
import RegisterFormFieldset from "./RegisterFormFieldset";
import Textarea from "./Textarea";

function RegisterForm() {
  return (
    <form action={createSheetData}>
      <RegisterFormFieldset>
        <FormControl>
          <Label htmlFor='firstName'>First Name</Label>
          <FormDescription>(Pangalan)</FormDescription>
          <Input
            type='text'
            id='firstName'
            name='firstName'
            placeholder='First name'
            required
          />
        </FormControl>
        <FormControl>
          <Label htmlFor='lastName'>Last Name</Label>
          <FormDescription>(Apelyido)</FormDescription>
          <Input
            type='text'
            id='lastName'
            name='lastName'
            placeholder='Last name'
            required
          />
        </FormControl>
        <FormControl>
          <Label htmlFor='nickname'>Nickname</Label>
          <FormDescription>(Palayaw)</FormDescription>
          <Input
            type='text'
            id='nickname'
            name='nickname'
            placeholder='Nickname'
            required
          />
        </FormControl>
        <FormControl>
          <Label htmlFor='address'>Address</Label>
          <FormDescription>(Tirahan)</FormDescription>
          <Textarea
            id='address'
            name='address'
            placeholder='Address'
            rows={4}
            required
          />
        </FormControl>
        <FormControl>
          <Label htmlFor='birthday'>Birthday</Label>
          <FormDescription>(Petsa ng kapanganakan)</FormDescription>
          <Input
            type='date'
            id='birthday'
            name='birthday'
            placeholder='Birthday'
            defaultValue='2000-01-01'
            max='2013-01-01'
            required
            pattern='\d{4}-\d{2}-\d{2}'
          />
        </FormControl>
        <FormControl>
          <Label htmlFor='invitedBy'>Invited By</Label>
          <FormDescription>(Inimbitahan ni)</FormDescription>
          <Input
            type='text'
            id='invitedBy'
            name='invitedBy'
            placeholder='Who invited you?'
            required
          />
        </FormControl>

        <div className='border rounded border-zinc-700 p-6'>
          <h3 className='font-bold text-primary text-lg mb-3'>
            Rules & Regulations
          </h3>
          <p className='leading-relaxed'>
            {`"Youth and the Gospel" is a Christian Occasion for youth that seeks to
          be an edifying and sanctifying event for Young Christians. To make
          this possible, the following rules and guidelines are as follows:
          Please select "Yes / Oo", if you agree on the rules and guidelines asked.`}
          </p>
          <br />
          <p className='leading-relaxed italic'>
            {`(Ang "Youth and the Gospel" ay isang pang-Kristyanong okasyon para sa
          mga kabataan na naghahangad na patibayin at maibukod ang mga kabataang
          Kristyano. Upang maganap ito, narito ang mga sumusunod na patakaran at
          alituntunin: Piliin ang "Yes / Oo/Opo", kung ikaw ang sumasang-ayon sa
          nasabing patakaran.)`}
          </p>
        </div>
        <div className='space-y-5'>
          <div className='space-y-4 border rounded border-zinc-700 p-6'>
            <p>
              Do you agree to honor and respect the staffs and other youths on
              the event? <br />
              <span className='italic'>
                (Sumasang-ayon kaba na igalang at irespeto ang mga tauhan at
                kapwa kabataan sa nasabing okasyon?)
              </span>
            </p>
            <div className='items-center flex space-x-2'>
              <Checkbox id='agree_one' name='agree_one' required />
              <Label htmlFor='agree_one' className='text-base'>
                Yes / Oo
              </Label>
            </div>
          </div>
          <div className='space-y-4 border rounded border-zinc-700 p-6'>
            <p>
              Do you agree to wear appropriate clothes and avoid wearing
              sleeveless shirt, crop top, shorts, boxers and slippers? <br />
              <span className='italic'>
                (Sumasang-ayon kaba na magdadamit ng wasto at iiwasang magsuot
                ng damit na walang manggas o damit na labis ang pagpapakita ng
                balat, damit na kita ang pusod, maiikling pangbaba at tsinelas?)
              </span>
            </p>
            <div className='items-center flex space-x-2'>
              <Checkbox id='agree_two' name='agree_two' required />
              <Label htmlFor='agree_two' className='text-base'>
                Yes / Oo
              </Label>
            </div>
          </div>
          <div className='space-y-4 border rounded border-zinc-700 p-6'>
            <p>
              Do you agree to handle every item on Church with utmost care?{" "}
              <br />
              <span className='italic'>
                (Sumasang-ayon kaba na ingatan ang bawat kagamitan sa Simbahan?)
              </span>
            </p>
            <div className='items-center flex space-x-2'>
              <Checkbox id='agree_three' name='agree_three' required />
              <Label htmlFor='agree_three' className='text-base'>
                Yes / Oo
              </Label>
            </div>
          </div>
          <div className='space-y-4 border rounded border-zinc-700 p-6'>
            <p>
              Do you agree to behave properly on every part of the program?
              <br />
              <span className='italic'>
                (Sumasang-ayon kaba na kumilos ng wasto sa bawat bahagi ng
                programa?)
              </span>
            </p>
            <div className='items-center flex space-x-2'>
              <Checkbox id='agree_four' name='agree_four' required />
              <Label htmlFor='agree_four' className='text-base'>
                Yes / Oo
              </Label>
            </div>
          </div>
        </div>
        <div className='flex flex-col lg:flex-row gap-6'>
          <button
            type='submit'
            className='px-4 py-3 text-sm w-full bg-amber-500 text-zinc-800 font-semibold rounded hover:bg-primary/90'
          >
            Submit
          </button>
          <button
            type='reset'
            className='px-4 py-3 text-sm w-full bg-primary/10 text-primary font-semibold rounded hover:bg-primary/30'
          >
            Clear Form
          </button>
        </div>
      </RegisterFormFieldset>
    </form>
  );
}

export default RegisterForm;
