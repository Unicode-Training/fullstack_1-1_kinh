<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class ProductStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|unique:products,name',
            'price' => 'required|integer',
            'sale_price' => 'nullable|integer|lt:price',
            'description' => 'required',
            'status' => ['nullable', Rule::in(['publish'])]
        ];
    }

    public function getValidatedData()
    {
        $data = parent::validated(); //Lấy dữ liệu đã được validate
        $data['status'] = !empty($data['status']) ? 'PUBLISH' : 'DRAFT';
        return $data;
    }
}
