<?php

namespace App\Filament\Resources\UserResource\RelationManagers;

use App\Models\Game;
use Filament\Actions\StaticAction;
use Filament\Forms;
use Filament\Forms\Components\Select;
use Filament\Forms\Form;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Tables;
use Filament\Tables\Actions\Action;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class GamesRelationManager extends RelationManager
{
    protected static string $relationship = 'games';

    public function form(Form $form): Form
    {
        return $form
            ->schema([
                Select::make('name')
                    ->options(Game::all()->pluck('name','id')->toArray())
                    ->required()
                    ->label('Nombre'),
            ]);
    }

    public function table(Table $table): Table
    {
        return $table
            ->recordTitleAttribute('name')
            ->columns([
                Tables\Columns\TextColumn::make('name'),
            ])
            ->filters([
                //
            ])
            ->headerActions([
                //Tables\Actions\CreateAction::make(),
                Action::make('add')
                ->form([

                    Select::make('game_id')
                    ->options(function(){
                       return Game::all()->pluck('name','id')->toArray(); 
                        //AQUI VA LA ACTIVIDAD DE QUITAR LOS JUEGOS YA AGREGADOS
                        })
                    ->required()
                    ->label('Nombre'),
                ])
                ->action(function(array $data): void {
                    $record = $this->getOwnerRecord();
                    $record->games()->attach($data['game_id']);
                    $record->save();
                })
                ->modalSubmitAction(fn(StaticAction $action) => $action->label('Guardar'))
                ->label('Agregar Juego'),
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }
}
